$(document).ready(function() {
    let selectedAmenities = {};

    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        updateSelectedAmenities();
    });

    function updateSelectedAmenities() {
        const selectedList = $('#selected-list');
        selectedList.empty();

        for (let amenityId in selectedAmenities) {
            const amenityName = selectedAmenities[amenityId];
            selectedList.append(`<li>${amenityName}</li>`);
        }
    }
});
