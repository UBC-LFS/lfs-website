jQuery(document).ready(function ($) {
    $(function () {
        $(".interests").typed({
            strings: ["The interrelationships of plants, animals, soils and the atmosphere?", 
                    "^750 Biodiversity?", 
                    "^750 Sustainable food production systems?", 
                    "^750 Protecting and improving the natural environment?",
                    "^750 The health, protection and well-being of animals?", 
                    "^750 Working to improve food production and solve food shortages?",
                    "^750 Teaching others the intricacies and importance of the living world?",
                    "^750 The role of agriculture in urban areas?",
                     ],
            typeSpeed: 20,
            backDelay: 1500,
            backSpeed: -20,
            loop: true,
        });
    });
});