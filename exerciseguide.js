document.addEventListener('DOMContentLoaded', function() {
    const exerciseSelect = document.getElementById('exercise-select');
    const exercisePic = document.getElementById('exercise-pic');
    const showExerciseButton = document.getElementById('show-exercise');

    showExerciseButton.addEventListener('click', function() {
        const selectedExercise = exerciseSelect.value;
        let imageUrl = '';

        // Define image URLs for each exercise
        switch (selectedExercise) {
            case 'air-squat':
                imageUrl = 'img/exercises/air-squat.svg';
                break;
            case 'barbell-row':
                imageUrl = 'img/exercises/barbell-row.svg';
                break;
            case 'bench-press':
                imageUrl = 'img/exercises/bench-press.svg';
                break;
            case 'burpee':
                imageUrl = 'img/exercises/burpee.svg';
                break;
            case 'cable-cross':
                imageUrl = 'img/exercises/cable-cross.svg';
                break;
            case 'cable-pullover':
                imageUrl = 'img/exercises/cable-pullover.svg';
                break;
            case 'calf-raise':
                imageUrl = 'img/exercises/calf-raise.svg';
                break;
            case 'chair-dips':
                imageUrl = 'img/exercises/chair-dips.svg';
                break;
            case 'clean-and-press':
                imageUrl = 'img/exercises/clean-and-press.svg';
                break;
            case 'crunch':
                imageUrl = 'img/exercises/crunch.svg';
                break;
            case 'deadlift':
                imageUrl = 'img/exercises/deadlift.svg';
                break;
            case 'decline-pushup':
                imageUrl = 'img/exercises/decline-pushup.svg';
                break;
            case 'dumbbel-curl':
                imageUrl = 'img/exercises/dumbbel-curl.svg';
                break;
            case 'front-raise':
                imageUrl = 'img/exercises/front-raise.svg';
                break;
            case 'front-squat':
                imageUrl = 'img/exercises/front-squat.svg';
                break;
            case 'hammer-curl':
                imageUrl = 'img/exercises/hammer-curl.svg';
                break;
            case 'high-knee':
                imageUrl = 'img/exercises/high-knee.svg';
                break;
            case 'incline-bench-press':
                imageUrl = 'img/exercises/incline-bench-press.svg';
                break;
            case 'incline-dumbbell-press':
                imageUrl = 'img/exercises/incline-dumbbell-press.svg';
                break;
            case 'jumping-jack':
                imageUrl = 'img/exercises/jumping-jack.svg';
                break;
            case 'jump-squat':
                imageUrl = 'img/exercises/jump-squat.svg';
                break;
            case 'lateral-raise':
                imageUrl = 'img/exercises/lateral-raise.svg';
                break;
            case 'lat-pulldown':
                imageUrl = 'img/exercises/lat-pulldown.svg';
                break;
            case 'leg-curl':
                imageUrl = 'img/exercises/leg-curl.svg';
                break;
            case 'leg-extension':
                imageUrl = 'img/exercises/leg-extension.svg';
                break;
            case 'lunge':
                imageUrl = 'img/exercises/lunge.svg';
                break;
            case 'muscle-up':
                imageUrl = 'img/exercises/muscle-up.svg';
                break;
            case 'overhead-press':
                imageUrl = 'img/exercises/overhead-press.svg';
                break;
            case 'overhead-tricep':
                imageUrl = 'img/exercises/overhead-tricep.svg';
                break;
            case 'pullup':
                imageUrl = 'img/exercises/pullup.svg';
                break;
            case 'pushup':
                imageUrl = 'img/exercises/pushup.svg';
                break;
            case 'shrug':
                imageUrl = 'img/exercises/shrug.svg';
                break;
            case 'skull-crusher':
                imageUrl = 'img/exercises/skull-crusher.svg';
                break;
            case 'sl-deadlift':
                imageUrl = 'img/exercises/sl-deadlift.svg';
                break;
            case 'squat':
                imageUrl = 'img/exercises/squat.svg';
                break;
            case 'squat-clean-and-press':
                imageUrl = 'img/exercises/squat-clean-and-press.svg';
                break;
            case 'wall-sit':
                imageUrl = 'img/exercises/wall-sit.svg';
                break;
            case 'z-bar-curl':
                imageUrl = 'img/exercises/z-bar-curl.svg';
                break;
            default:
                imageUrl = 'img/default-exercise.jpg'; // Default image if exercise not found
        }

        // Update the image source
        exercisePic.src = imageUrl;

        // Set the background color to #white and add padding and rounded corners
        exercisePic.style.backgroundColor = 'white';
        exercisePic.style.padding = '20px'; // Adjust padding as needed
        exercisePic.style.borderRadius = '15px'; // Add rounded corners
        // Set image size
        if (window.matchMedia("(max-width: 300px)").matches) {
            // For mobile devices
            exercisePic.style.width = '400px'; // Adjust width for mobile devices
        } else {
            // For other devices
            exercisePic.style.width = '900px'; // Adjust width for other devices
        }
        exercisePic.style.height = 'auto'; // Maintain aspect ratio
    });
});
