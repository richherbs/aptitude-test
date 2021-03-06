/**
 * checks if test_option is same as the test selected and then populates user duration
 * @param test_option the test_option to check against
 * @param testFieldValue the test selected
 */
function populateUserDuration(test_option, testFieldValue) {
        if (test_option.value === testFieldValue) {
            const test_duration = test_option.dataset.time;
            let userDurationMinutes = Math.floor(test_duration / 60);
            let userDurationSeconds = test_duration % 60;
            let userDurationMinutesField = document.querySelector('#user_time_minutes');
            let userDurationSecondsField = document.querySelector('#user_time_seconds');

            userDurationMinutesField.value = String(userDurationMinutes).padStart(2,'0');
            userDurationSecondsField.value = String(userDurationSeconds).padStart(2,'0');
        }
}