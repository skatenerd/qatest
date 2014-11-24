Online Restaurant Menu
=====================

This repository contains a Javascript widget for an online restaurant menu.  Your goal is to write Jasmine tests to exercise the functionality of this widget.

If you come across buggy behavior, you should write a Jasmine test to illustrate the bug.  The test should fail when the bug is present, and the test should pass when the bug gets fixed.

To see the widget, clone this repository, and visit `file:///path/to/repo/qatest/demo.html`.  

To run tests, visit `file:///path/to/repo/qatest/SpecRunner.html`.  

If you encounter an error saying "Error: Fixture could not be loaded", try running the tests from Firefox.  Another option is to launch Chrome (or Chromium) with the flag `--allow-file-access-from-files`.

To add to the tests, edit the file `MenuWidgetSpec.js`.  There is already one passing test in this file.

Note that the list of menu items (and their prices) is not hard-coded; the data comes from an Amazon S3 Bucket.  In the existing Jasmine test, we have stubbed the AJAX request that fetches this data.

Also notice that we are testing our widget against a "fixture".  The fixture is a small HTML document against which we can run the Javscript widget.  It contains all of the HTML elements that the Javascript needs, but does not contain any extra markup.

How to submit your answer
---------------------------
Please clone this repository, and make a pull request, containing your changes.
