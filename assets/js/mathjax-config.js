window.MathJax = {
    loader: { load: ['[tex]/mathtools', '[tex]/boldsymbol'] },
    tex: {
        tags: "ams",
        inlineMath: [['$', '$'], ["\\(", "\\)"]],
        packages: { '[+]': ['mathtools', 'boldsymbol'] }
    }
};