console.log ("script loaded");

// const aObject = document.querySelector("#chirpus-obj");
// aObject.addEventListener('click', clickListener);

// function clickListener(ev) {
//     console.log("click!");
//     const scale = aObject.getAttribute('scale');
//     Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
//     aEntity.setAttribute('scale', scale);
// }

AFRAME.registerComponent('markerhandler', {

    init: function() {
        console.log("loading events...");
        const marker = document.querySelector("#gc");
        const aObject = document.querySelector("#chirpus-obj");

        // every click, we make our model grow in size :)
        marker.addEventListener('click', function(ev, target){
            console.log("click detected " + ev);
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aObject.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity.setAttribute('scale', scale);
            }
        });
}});