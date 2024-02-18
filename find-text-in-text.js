// ==UserScript==
// @name         Find Specific Word in Text Content
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Find a specific word within the text content and alert when found
// @author       You
// @match        https://www.myopenmath.com/embedq2.php?id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to normalize the text for comparison
    function normalizeText(text) {
        // Remove extra white spaces and special characters
        return text.trim().replace(/\s+/g, ' ').replace(/[\u{0080}-\u{FFFF}]/gu, '');
    }

    // Function to check if the page contains the target word within text content
    function checkForWord(targetWord) {
        const elements = document.querySelectorAll('*');
        for (const element of elements) {
            const textContent = element.textContent;
            if (textContent.includes(targetWord)) {
                alert(`Found the word "${targetWord}"!`);
                return;
            }
        }
    }

    // Prompt user to enter the target word
    const targetWord = prompt("Enter the word you want to find:");

    // Start searching for the target word
    checkForWord(targetWord);
})();
