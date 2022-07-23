# ActivityCalculator

We need to build a simple dashboard that will allow 
individuals to track their daily activities and provide them with some simple data [calories, results etc.].

## Specifics

* Calorie Calculation

Calorie calculations require some knowledge about the type of activity that is being performed in order to determine the activities Metabolic equivalent of task (MET). To simplify this a little (or a lot), I've simply included a dropdown that allows users to indicate their activity intensity that has MET values included from Very Light (1 MET) to Max Effort (14 METS). Calorie calculation for an activity ends up being a simple formula of MET * weight in kg = calories/hour.

You will need calories per min, not hour, since most activities are measured in minutes.

NOTE: This is a very simplified formula, there are a variety of factors that play a role in accurate calorie calculation.

* Date

Each activity must record the date that the activity took place. When new activities are created you should be taking a a snapshot of the date (a date/time stamp) so that you can display it back to the user in the table in the format February 12, 2021. You can find very simple Date patterns for formatting output at W3Schools.

* Time

Time is collected in minutes but must be displayed in the format 4hrs. 2mins. (including both hours and minutes). If there are 0 hours, then only minutes should be displayed.

You can access my website at: https://venerable-sable-7452ea.netlify.app/
