const counters = document.querySelectorAll('.counter');
const speed = 200; 

counters.forEach(counter => {
	const updateCount = () => {
    // + sign converts below from string to number
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / speed;

    // console.log(inc);
    // console.log(count);

    // Check if target is reached
    if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = count + inc;
        // Call function every ms
        setTimeout(updateCount, 1);
    } else {
        counter.innerText = target;
    }
	};

	updateCount();
});
