
(() => {
    'use strict'

    // Custom JSopX Code Snippet Feature, often used in Modals.
    document.addEventListener('DOMContentLoaded', function () {
        const codeElements = document.querySelectorAll('.jsopxCodeSnippet');
        const copyButtons = document.querySelectorAll('.copyJsopxCodeSnippet'); 
        const toastEl = document.querySelector('.jsopxToast');
        const toast = new bootstrap.Toast(toastEl);

        // Initially hide the toast
        toast.hide();

        // Trim leading whitespace and set code snippet text
        codeElements.forEach(codeElement => {
            let codeSnippet = codeElement.innerText;
            codeSnippet = trimLeadingWhitespace(codeSnippet);  // Trim leading whitespace
            codeElement.innerText = codeSnippet;
        });

        // Add event listeners to copy buttons
        copyButtons.forEach((button, index) => {
            button.addEventListener('click', function () {
                const codeElement = codeElements[index];
                const codeSnippet = codeElement.innerText;

                navigator.clipboard.writeText(codeSnippet).then(function () {
                    toast.show();  // Show the toast when copy is successful
                }).catch(function (error) {
                    console.error('Failed to copy text: ', error);
                });
            });
        });
    });

    function trimLeadingWhitespace(code) {
        const lines = code.split('\n');
        const indentLength = lines.reduce((minIndent, line) => {
            if (line.trim() === '') return minIndent;
            const indent = line.match(/^\s*/)[0].length;
            return indent < minIndent ? indent : minIndent;
        }, Infinity);

        return lines.map(line => line.substring(indentLength)).join('\n');
    }

    function jsopxEncodeHTML(html) {
        return html.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/ / g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function jsopxDecodeHTML(html) {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    }

    //function setActiveItem() {
    //    const { hash } = window.location

    //    if (hash === '') {
    //        return
    //    }

    //    const link = document.querySelector(`.bd-aside a[href="${hash}"]`)

    //    if (!link) {
    //        return
    //    }

    //    const active = document.querySelector('.bd-aside .active')
    //    const parent = link.parentNode.parentNode.previousElementSibling

    //    link.classList.add('active')

    //    if (parent.classList.contains('collapsed')) {
    //        parent.click()
    //    }

    //    if (!active) {
    //        return
    //    }

    //    const expanded = active.parentNode.parentNode.previousElementSibling

    //    active.classList.remove('active')

    //    if (expanded && parent !== expanded) {
    //        expanded.click()
    //    }
    //}

    //setActiveItem()
    //window.addEventListener('hashchange', setActiveItem)
})()
