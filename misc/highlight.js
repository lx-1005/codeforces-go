// ==UserScript==
// @name         Codeforces Highlight
// @namespace    EndlessCheng
// @version      0.1
// @description  highlight some important words
// @author       EndlessCheng
// @match        https://atcoder.jp/*
// @match        https://codeforces.com/*
// @match        https://codeforces.ml/*
// @match        https://codingcompetitions.withgoogle.com/*
// @match        https://leetcode-cn.com/*
// ==/UserScript==

(function () {
    'use strict';

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
    function escapeRegExp(s) {
        return s.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    String.prototype.replaceAll = function (oldStr, newStr) {
        return this.replace(new RegExp(escapeRegExp(oldStr), "g"), newStr);
    };

    // 关键词高亮，参考 IntelliJ Light
    const color = "#008dde";
    // 高亮的词，一部分类似 Python 的关键字，另一部分是一些术语、修饰词之类
    // 注意前者要包含后者
    const words = [
        " not ", "don't", "didn't", "doesn't", "can't", " no ", // "n't",
        "if and only if", "and all", "or all",
        "If ", " if ", "Otherwise", "otherwise", " and ", " or ", "either",
        " any", " all ", "every", " both ",
        "same", "different", "unique", "distinct",
        "more", "must", "only", "exactly", "always",

        // "Note", "note",
        "minimize", "maximize", "minimum", "maximum", "minimal", "maximal", "smallest", "largest",
        " small ", " big ", " large ",
        "at least", "at most",
        "non-zero", "positive", "negative", "integers", "an integer", "integer", "pairwise",

        "Initially", "initially", "guaranteed",

        "modulo",
        "permutations", "permutation",
        "lowercase", "uppercase",
        "lexicographically", "lexicographical",
        "expected value",
        "operations", "Operations", "operation", "Operation",

        "没有", "不是",
        "所有", "任何", "任意", "和", "或",
        "最小", "最大", "最少", "最多", "最短", "最长",
        "至少", "至多",
        "连续", "子数组", "子区间", "区间", "子序列", "子字符串", "子串",
        "严格", "递增", "递减", "升序", "降序", "字典序",
        "返回",
    ];

    const tags = ['p', 'li'];
    for (let ti = 0; ti < tags.length; ti++) {
        let pNodes = document.getElementsByTagName(tags[ti]);
        for (let i = 0; i < pNodes.length; i++) {
            let text = pNodes[i].innerHTML;

            for (let j = 0; j < words.length; j++) {
                text = text.replaceAll(words[j], "<span style='color: " + color + "'>" + words[j] + "</span>");
            }

            text = text.replaceAll("Mr. ", "Mr.")
                .replaceAll("mr. ", "mr.")
                .replaceAll("I.e. ", "I.e.")
                .replaceAll("i.e. ", "i.e.")
                .replaceAll("i. e. ", "i.e.")
                .replaceAll("Div. ", "Div.")
                .replaceAll("div. ", "div.")
                .replaceAll("...", "⋯") // 特殊处理一些句点+空格，这些是不需要换行处理的
                // So you decided to hold a contest on Codeforces.
                // The maximum size of an array is $$$k$$$.
                .replaceAll(". ", ".</p><p>") // 加个换行（英文）
                .replaceAll(".\n", ".</p><p>") // 加个换行（英文）
                .replaceAll("。", "。</p><p>") // 加个换行（中文）
                .replaceAll("\\dots", "~.~.~.~") // 替换掉省略号
                .replaceAll("\\ldots", "~.~.~.~"); // 替换掉省略号

            // .replace(/(\$\$\$.+?\$\$\$)/g, "‘$1’"); // 教训：不应该加这个，看似优化实则是帮倒忙

            pNodes[i].innerHTML = text;
        }
    }
})();
