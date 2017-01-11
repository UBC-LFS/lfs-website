jQuery(document).ready(function ($) {
    $(function () {
        $(".interests").typed({
            strings: ["^750 the interrelationships of plants, animals, soils and the atmosphere?", 
                    "^750 biodiversity?", 
                    "^750 sustainable food production systems?", 
                    "^750 protecting and improving the natural environment?",
                    "^750 the health, protection and well-being of animals?", 
                    "^750 working to improve food production and solve food shortages?",
                    "^750 teaching others the intricacies and importance of the living world?",
                    "^750 the role of agriculture in urban areas?",
                     ],
            typeSpeed: 20,
            backDelay: 1500,
            backSpeed: -20,
            loop: true,
        });
    });
});