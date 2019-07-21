# Chromamotion

A project in React native to help users identify, track, and share their feelings.

## Todo

### Emotions Picker
- [X] Create emotion picker page. Needs to be scrollable.
  - [X] Find a better way to match colors to feelings?
- [X] Make emotion component that can be selected or deselected
- [X] Make a way to save these selections
  - [X] Tie selections into redux saga
- [ ] Make a rollup bar at the top that shows the current spectrum of emotions

### Check-in review
- [X] Make a screen where you can see your previous check-ins
  - [X] Sorted by day/time newest up top
  - [X] It's a 100% horizontal bar button that's the spectrum of how you felt.
  - [X] New CheckIN bar above all checkIns
- [X] When you select a checkin, you're brought to a details page of it.
- [X] When saving a checkin, associate the device's UUID
- [ ] When saving a checkin, associate the logged in user, if there is one

### Check-in details
- [X] See the details of a check-in
- [X] Delete a checkin

### Login/Sign up and Back End as a Service
- [X] Integrate with an Authorication provider that also offers back end as a service.
- [X] Allow users to login or sign up for this as a service
- [X] Begin storing their check-ins on that service.
- [X] Load their user when loading the application
- [X] Allow logout
- [ ] Make button to associate all previous checkins with your new login. (If previously logged out)

### Friends
- [ ] Default view for friends screen is their most recent checkin.
- [ ] Add a screen to search for a user by name
- [ ] Add ability to send friendship request
- [ ] Add ability to see friendship requests
- [ ] Add ability to approve or reject friendship request
- [ ] Add ability to share checkin with users who are your friends.

### About Screen
- [ ] Create a place to link back to my repo, and personal website

## Notes For Future Self
- If the pod file is acting up try. `pod deintegrate chromamotion.xcodeproj` to remove all the stuff, then `pod install` to start over.

### TheCodingMachine React Native boilerplate
Big thanks to TheCodingMachine for this boilerplate which I've built off of. Credit here:
This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

The boilerplate provides **an architecture optimized for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic. It is extremely documented so that each piece of code that lands in your application can be understood and used.

##### About TheCodingMachine

[TheCodingMachine](https://www.thecodingmachine.com/) is a web and mobile agency based in Paris and Lyon, France. We are [constantly looking for new developers and team leaders](https://www.thecodingmachine.com/nous-rejoindre/) and we love [working with freelancers](https://coders.thecodingmachine.com/). You'll find [an overview of all our open source projects on our website](https://thecodingmachine.io/open-source) and on [Github](https://github.com/thecodingmachine).
