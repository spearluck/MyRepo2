// Load YUI modules: 'node' for DOM manipulation, 'anim' for animations, and 'anim-node-plugin' for animation plugins
YUI().use('node', 'anim', 'anim-node-plugin', function (Y) {

    // Get a reference to the DOM node with ID 'o'
    var o = Y.one('#o'),
        oW = o.get('offsetWidth'),   // Width of the container
        oH = o.get('offsetHeight'),  // Height of the container
        max = 80,                    // Maximum bubble size
        min = 20,                    // Minimum bubble size
        bubbles = 100,               // Number of bubbles to create
        timerDelay = 5000;           // Max delay before a bubble is created (in milliseconds)

    // Function to create a new bubble element and animate it
    function makeBubble() {
        // Create a span element with class 'bubble'
        var b = Y.Node.create('<span class="bubble"></span>');

        // Plug in the NodeFX plugin for animations
        b.plug(Y.Plugin.NodeFX, {
            duration: 7,                   // Animation duration in seconds
            easing: Y.Easing.easeOut,     // Animation easing function
            to: {
                top: 0,                   // Bubble moves to the top of the container
                opacity: 0                // Bubble fades out
            },
            on: {
                end: function () {
                    // After animation ends, wait 10 seconds and reanimate the same bubble
                    Y.later(10000, this, function () {
                        animBubble(this.get('node'));
                    });
                }
            }
        });

        // Add the bubble to the container
        o.append(b);

        // Start the animation
        animBubble(b);
    }

    // Function to randomly style and animate a bubble
    function animBubble(b) {
        // Random bubble size between min and max
        var v = Math.floor(Math.random() * (max - min)) + min;

        // Set initial styles
        b.setStyles({
            height: v + 'px',
            width: v + 'px',
            borderRadius: v + 'px',                // Makes the bubble round
            top: (oH + 2) + 'px',                  // Start just below the container
            opacity: 1                             // Fully visible at start
        });

        // Random horizontal position
        b.setStyle('left', Math.floor(Math.random() * (oW - v)));

        // Random duration (3 to 5 seconds)
        b.fx.set('duration', Math.floor(Math.random() * 1 + 6) + 2);

        // Random final vertical position (somewhere in top half of container)
        b.fx.set('to.top', Math.floor(Math.random() * (oH / 4)));

        // Run the animation
        b.fx.run();
    }

    // Create multiple bubbles with random delays up to timerDelay
    for (var i = 0; i < bubbles; i += 2) {
        Y.later(Math.random() * timerDelay, this, function () {
            makeBubble();
        });
    }

});
