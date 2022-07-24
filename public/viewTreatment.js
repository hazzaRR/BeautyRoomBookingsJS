const treatments = document.querySelectorAll('.treatment-li');

for (let i = 0; i < treatments.length; i++) {

    treatments[i].addEventListener('click', () => {
        console.log(treatments[i].id);

        window.location.href = `/treatment/viewTreatment?id=${treatments[i].id}`;
    })
};
