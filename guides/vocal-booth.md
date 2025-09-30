---
title: Vocal Booth Operating Guide
layout: default
permalink: /vocal-booth/
---

## Vocal Booth (Sing) Operating Guide - Version 1

## Sonic Playground - GRAMMY Museum

Please read this guide in its entirety before making changes to the _Vocal Booth._

## BASICS

The _Vocal Booth's_ computer is working properly when pressing the red `START OVER` button returns teh video screen to the `YOU CAN SING` splash-screen, and then pressing the green `PLAY` button begins playing a video of the virtual host.  

There should be two (2) microphones on stands in the room, one for `VOCAL EFFECTS A` coming from the bottom of the left side of the console, and one for `VOCAL EFFECTS B` coming from the bottom of the right side of the console. One or more pairs of headphones associated with each side (2-4 pairs total) should also be connected ot the associated side of the bottom of the console.  

### System Testing and Verification

The functioning of the microphones, headphones, and most controls on th console can be tested as follows:  

1. Put on headphones connected to `VOCAL EFFECTS A`
2. Set up the microphone connected to `VOCAL EFFECTS A` so that you can speak into it while manipulating the buttons on the left side of the console.
3. Press the `START OVER` button to be sure you are at the activity's splash-screen.
4. Sing into the microphone while pressing the joystick in one of the four (4) directions - up, down, left, or right. You should hear your voice in teh headphones and it should be transformed. Repeat for each direction on the joystick.
5. Sing into the microphone while pressing of of the four (4) effect buttons on the right of the joystick - `ECHO`, `AUTO-TUNE`, `REVERB`, `SYNTH`. You should hear your voice in the headphones and it should be transformed. Repeat for each of the other effect buttons.
6. Press and release the `VOLUME UP` button and check to see if the microphone sounds louder in your headphones.
7. Press and release the `VOLUME DOWN` button and check to see if the microphone sounds softer in your headphones.
8. Repeat Steps 1 through 7 above for `VOCAL EFFECTS B`
9. Proceed through the activity as guided by the hos and be sure to test the `NEXT` and `PREVIOUS` buttons for selecting a song to perform, as well as the `EFFECTS-OFF` and `EFFECTS-AUTO` buttons after a song has been selected to test those functions.

### Troubleshooting

_Vocal Booth (Sing)_ runs on a Mac Mini, running one (1) piece of software: `Ableton Live 12 Suite.` Most issues can be solved by:

1. Restarting the Mac Mini, which can be accomplished remotely via _Jump Desktop._
2. Restarting `Ableton Live` and opening the recent document with the words `RUN FOR SHOW` in the file name.

Less frequently, the audio-interface device inside _Vocal Booth (Sing)_ may need to be restarted. This can only be done by opening the console case via the lock in the center-bottom of the casework, locating the bright red audio-interface with a power switch on the rear, and switching it off and on. On these occasions when the audio-interface has been malfunctioning, there is a preference inside `Ableton Live` where an audio interface can be selected as the output device. The `Focusrite` audio interface may need to be re-selected here.

## ADVANCED

### System Components

The internal components inside the console are:

- Mac Mini
- Audio interface (`Focusrite`)
- Headphone amplifier for `VOCAL EFFECTS B`
  - The audio interface's headphone output is used for `VOCAL EFFECTS A`
- S/PDIF converter (used to get two additional outputs from teh audio interface to feed the two monitor speakers in the room) with audio adapters
- Keyboard and mouse
- Custom console electronics (USB hub):
  - One (1) Arduino acting as a USB-MIDI device
  - Two (2) joysticks acting as separate USB HID devices
- Power splitters
- USB hub(s)
- _Potentially_: audio splitter adapters for additional headphones
- _Potentially_: other audio adapters

The computer is directly connected to teh video monitor via HDMI cable.

## Software Automation

`Jump Desktop` runs in the background, allowing remote access to the host Mac Mini.

The Mac Mini system settings for `Login Items & Extensions` are instructed to `Open at Login` the application `Ableton_autostart.app`. This application was created with `Automator` and performs the following tasks at launch:

- Deletes a list of files which `Ableton Live` uses to detect crashes and save undo histories (both of which hinder the software from running smoothly in this permanent installation)
- Deletes audio recordings created by previous users of the activity
- Empties the `Trash`
- Opens the appropriate `Ableton Live` document to start the activity.

`Power Manager` runs in the background and performs the following timed operations:

- 01:00AM - runs an application called `Ableton_Kill.app` which quits the `Ableton Live` software
- 01:02AM - shuts down the computer
- 06:00AM - boots the computer
