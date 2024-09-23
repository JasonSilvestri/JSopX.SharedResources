/* global bootstrap: false */

(() => {
    'use strict'

    // Tooltip and popover demos
    document.querySelectorAll('.tooltip-demo')
        .forEach(tooltip => {
            new bootstrap.Tooltip(tooltip, {
                selector: '[data-bs-toggle="tooltip"]'
            })
        })

    document.querySelectorAll('[data-bs-toggle="popover"]')
        .forEach(popover => {
            new bootstrap.Popover(popover)
        })

    document.querySelectorAll('.toast')
        .forEach(toastNode => {
            const toast = new bootstrap.Toast(toastNode, {
                autohide: false
            })

            toast.show()
        })

    // Disable empty links and submit buttons
    document.querySelectorAll('[href="#"], [type="submit"]')
        .forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault()
            })
        })

    /* refresh tabs when scroll spying: false */
    document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
        el.addEventListener('shown.bs.tab', () => {
            const target = el.getAttribute('data-bs-target')
            const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
            bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
        })
    })

    function setActiveItem() {
        const { hash } = window.location

        if (hash === '') {
            return
        }

        const link = document.querySelector(`.bd-aside a[href="${hash}"]`)

        if (!link) {
            return
        }

        const active = document.querySelector('.bd-aside .active')
        const parent = link.parentNode.parentNode.previousElementSibling

        link.classList.add('active')

        if (parent.classList.contains('collapsed')) {
            parent.click()
        }

        if (!active) {
            return
        }

        const expanded = active.parentNode.parentNode.previousElementSibling

        active.classList.remove('active')

        if (expanded && parent !== expanded) {
            expanded.click()
        }
    }

    setActiveItem()
    window.addEventListener('hashchange', setActiveItem)
})()
