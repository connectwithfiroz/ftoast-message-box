<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
    <link rel="stylesheet" href="ftoast-style.css">
</head>
<!-- style for this page -->
<style>
    code {
        background: #3d2d2d;
        color: #fff;
        padding: 2px;

    }
</style>

<body>
    <!-- successs toast start -->
    <fieldset>
        <legend>Success Toast</legend>
        <button id="successToastBtn">Success Toast (Duration 10s default)</button>
        <h3>
            Function Call- <code>ftoast('success', 'Updated', 'Your change has updated.')</code>
        </h3>
    </fieldset>
    <!-- successs toast end -->
    <!--warning toast start -->
    <fieldset>
        <legend>Warning Toast</legend>
        <button id="warningToastBtn">Warning Toast (Duration 10s default)</button>
        <h3>
            Function Call- <code>ftoast('warning', 'warning', 'Money will not be refundable.')</code>
        </h3>
    </fieldset>
    <!--warning toast end -->
    <!--alert toast start -->
    <fieldset>
        <legend>alert toast</legend>
        <button id="alertToastBtn">Alert Toast (Duration 10s default)</button>
        <h3>
            Function Call- <code>ftoast('alert', 'Alert', 'Don\'t delete this file.')</code>
        </h3>
    </fieldset>
    <!--alert toast end -->
    <!--custom toast start -->
    <fieldset>
        <legend>custom toast</legend>
        <button id="customToastShowBtn">Blue Toast (Duration 5s default)</button>
        <h3>
            Function Call- <code>ftoast('blue', 'Blue', 'I\'m Blue message duration-5s', 5, 'pencil')</code>
        </h3>
    </fieldset>
    <!--custom toast end -->

    <h2>How To Use</h2>
    <ol>
        <li>Add font awesome in head section of your file
            <a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">Click Here to view the
                font awesome file.</a>
            <a href="https://cdnjs.com/libraries/font-awesome">Click Here to GO TO cdnjs</a>

        </li>
        <li>Add ftoast-style.css in your file after the font-awesome other wise icon will not be visible.</li>
        <li>Add ftoast.js after the body section of your file</li>
        <li>Call the toast function syntax-
            <p>
                <code>ftoast(type, Messag_Title, Toast_Message, duration, icon)</code><br> <br>
                <b>Type- </b>It defined the type of alert. It can be success|alert|warning or you
                can use color code or color name. But if you're using color code then you've to pass one more argument
                at the end.
                <code> ftoast("success", "Success", "This is success message.", 2)</code>
            <h4>If you're Passing color as argument for type then you've to pass one more argument ie. icon at the end.
            </h4>
            <code> ftoast("Orange", "Orange", "This is Orange message.", 2, 'check')</code>
            <p>
                <i>Note- If you'll not pass the last argument 'check' then icon wil not be visible in toast.</i>
            </p>

            </p>

            <p>
                <b>Message_Title- </b>It is user to set the title of the toast<br>
                Example-
                <code> ftoast("warning", "Set Your Title Here", "This is red message.", 5, 'exclamation')</code>
            <p><i>In above example we don't need to pass icon ie. 'exclamation' because we're using
                    type=warning</i></p>
            </p>
            <p>
                <b>Toast Message- </b>It is user to set the message in the toast<br>

                Example-
                <code> ftoast("alert", "Set Your Title Here", "Set Your message here.", 6)</code>
            <p><i>In above example we don't need to pass icon ie. 'exclamation' because we're using
                    type=warning</i></p>
            </p>
            <p>
                <b>Icon- </b>icon can be any font awesome 6 icon. example- check, exclamation etc.
                Note- Only pass the icon name by removing fa from the start <br>
                Example-
                <code> ftoast("red", "Red title", "This is red message.", 5, 'exclamation')</code>
            </p>
        </li>
    </ol>

    <h2>Snapshot</h2>
    <img src="toast-demo.png" alt="" style="width:100%; margin-bottom:30px;">
</body>
<script src="ftoast.js"></script>
<script>
    /*--- Structure of the function given below ---
     ftoast(<type>, <Messag_Title>, <Toast_Message>, <duration>, <icon>)
        --> icon is not requred if type is not a color.
        --> For example type='success' then we don't need to pass icon default will be success if you pass then it will be replace.
    --- Structure of the function end ---*/
    document.querySelector('#successToastBtn').addEventListener('click', function () {
        // === call toast function here
        ftoast('success', 'Updated', 'Your change has updated.')
    })
    // == for alert toast btn ==//
    document.querySelector('#alertToastBtn').addEventListener('click', () => {
        ftoast('alert', 'Alert', 'Don\'t delete this file.')
    })
    // == for warning toast btn ==//
    document.querySelector('#warningToastBtn').addEventListener('click', () => {
        ftoast('warning', 'warning', 'Money will not be refundable.')
    })
    // == for custom toast btn ==//
    document.querySelector('#customToastShowBtn').addEventListener('click', () => {
        ftoast('blue', 'Blue', 'I\'m Blue message duration-5s', 5, 'pencil')
    })
</script>


</html>
