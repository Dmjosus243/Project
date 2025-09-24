document.addEventListener('DOMContentLoaded', function () {
    const navSelector = 'nav';
    const activeClass = 'active';

    function normalizePath(path) {
        if (!path) return '/';
        // remove query and hash
        path = path.split('?')[0].split('#')[0];
        // ensure leading slash
        if (!path.startsWith('/')) path = '/' + path;
        // remove trailing slash except root
        if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
        return path;
    }

    function resolveHrefToPath(href) {
        if (!href) return '/';
        // Anchor-only links should match current pathname (hash handled separately)
        if (href.startsWith('#')) return normalizePath(window.location.pathname);
        try {
            // Resolve relative and absolute URLs
            const url = new URL(href, window.location.href);
            return normalizePath(url.pathname);
        } catch (e) {
            return normalizePath(href);
        }
    }

    function updateActiveLink() {
        const nav = document.querySelector(navSelector);
        if (!nav) return;
        const links = Array.from(nav.querySelectorAll('a'));
        const current = normalizePath(window.location.pathname);

        // compute best match (longest specific match)
        let bestLink = null;
        let bestScore = 0;

        links.forEach(link => {
            const href = link.getAttribute('href') || '';
            const linkPath = resolveHrefToPath(href);

            // exact match or index.html variants
            if (linkPath === current) {
                score = 10000;
            } else {
                // treat index.html as equivalent to its folder
                const lpNoIndex = linkPath.replace(/\/?index\.html$/, '');
                const curNoIndex = current.replace(/\/?index\.html$/, '');

                if (lpNoIndex === curNoIndex) {
                    score = 9000;
                } else if (curNoIndex.startsWith(lpNoIndex + '/') || lpNoIndex.startsWith(curNoIndex + '/')) {
                    // prefix match but ensure boundary
                    score = lpNoIndex.length;
                } else {
                    score = 0;
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestLink = link;
            }
        });

        // remove active from all
        links.forEach(l => l.classList.remove(activeClass));
        // add to best if any
        if (bestLink && bestScore > 0) bestLink.classList.add(activeClass);
    }

    updateActiveLink();

    // Re-evaluate when navigation history changes (back/forward)
    window.addEventListener('popstate', updateActiveLink);
    // pageshow handles bfcache restores
    window.addEventListener('pageshow', updateActiveLink);

    // If your site changes nav links dynamically, observe and update
    const navElem = document.querySelector(navSelector);
    if (navElem && window.MutationObserver) {
        const mo = new MutationObserver(() => updateActiveLink());
        mo.observe(navElem, { childList: true, subtree: true, attributes: true });
    }

    // Optional: when clicking internal links, update immediately (good for SPA or anchors)
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (!a) return;
        const nav = a.closest(navSelector);
        if (!nav) return;
        // allow default navigation, but update visual state quickly
        setTimeout(updateActiveLink, 50);
    });
});