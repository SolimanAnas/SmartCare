/* SmartCare — shared loading / empty / error state renderer.
 *
 * One consistent pattern for every fetch-driven view instead of each page
 * inventing its own (or rendering nothing at all on failure). Pairs with
 * the `.skeleton-line` / `.state-block` CSS in styles.css.
 *
 * Usage:
 *   renderState(container, 'loading', { lines: 3 });
 *   renderState(container, 'empty', { title: 'No results', message: '...' });
 *   renderState(container, 'error', {
 *     title: "Couldn't load drug data",
 *     message: err.message,
 *     iconHref: '../icons/sprite.svg#triangle-alert',
 *     onRetry: () => boot(),
 *   });
 *
 * `iconHref` is a fully-resolved `sprite.svg#name` path — callers know
 * their own directory depth, so this module doesn't guess it.
 */
(function () {
    "use strict";

    function escapeHtml(str) {
        return String(str == null ? "" : str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function icon(href) {
        if (!href) return "";
        return (
            '<svg class="lucide state-icon" width="1em" height="1em" aria-hidden="true" focusable="false">' +
            '<use href="' + escapeHtml(href) + '"/></svg>'
        );
    }

    function renderLoading(container, options) {
        var lines = options.lines || 3;
        var sizes = options.sizes || ["lg", "md", "sm"];
        var html = "";
        for (var i = 0; i < lines; i++) {
            html += '<div class="skeleton-line ' + (sizes[i % sizes.length]) + '"></div>';
        }
        container.innerHTML = html;
    }

    function renderEmptyOrError(container, state, options) {
        var title = options.title || (state === "error" ? "Something went wrong" : "Nothing here yet");
        var message = options.message || "";
        var retryHtml = "";
        if (state === "error" && typeof options.onRetry === "function") {
            retryHtml = '<button type="button" class="control-btn state-retry" data-render-state-retry>Retry</button>';
        }
        container.innerHTML =
            '<div class="state-block' + (state === "error" ? " error" : "") + '">' +
            icon(options.iconHref) +
            '<p class="state-title">' + escapeHtml(title) + '</p>' +
            (message ? '<p class="state-sub">' + escapeHtml(message) + '</p>' : "") +
            retryHtml +
            '</div>';

        if (state === "error" && typeof options.onRetry === "function") {
            var btn = container.querySelector("[data-render-state-retry]");
            if (btn) btn.addEventListener("click", options.onRetry, { once: true });
        }
    }

    function renderState(container, state, options) {
        if (!container) return;
        options = options || {};
        if (state === "loading") renderLoading(container, options);
        else if (state === "empty" || state === "error") renderEmptyOrError(container, state, options);
    }

    window.renderState = renderState;
})();
