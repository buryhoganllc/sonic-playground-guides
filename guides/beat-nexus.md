---
title: Beat Nexus Operating Guide
layout: default
permalink: /beat-nexus/
---

## Beat Nexus Operating Guide - Version 1

## Sonic Playground - GRAMMY Museum

Please read this guide in its entirety before making changes to _Beat Nexus._

![Beat Nexus top view.]({{ '/assets/images/BN_TopView.jpeg' | relative_url }})

## Basics

`Beat Nexus` is working properly when the "brightly lit" zones on all four (4) sides of the device trigger sounds that can be heard on any of the headphones. Note that there are also "dimly lit" zones that do __NOT__ trigger sounds, but only _modify_ other sounds. The four (4) triangles on the center "visualizer" will animate in response to sounds being played on that respective side of the device. The large `UP`/`DOWN` arrow buttons on the right side of each bay control volume for the two (2) pairs of headphones connected to that side of the device.

Each individual side of `Beat Nexus` will "time out" after a set number of seconds when it is not being played. When a side reaches its time-out, its volume will return to a default level, and it will start a simple attract-animation with its lights. When all four (4) sides are in their time-out state, the center visualizer will also begin an attract-animation.

`Beat Nexus` runs on a Mac Mini, running one (1) piece of software: `Ableton Live 12 Suite`. There are four (4) touch-controllers connected to the computer by USB cables. Most issues can be solved by:

1. Restarting the Mac Mini, which can be accomplished remotely via _Jump Desktop._
2. Restarting `Ableton Live` and opening the recent document with the words `RUN FOR SHOW` in the file name.
3. Restarting the touch-controllers, which can be done with remote-controls which switch the touch-controller's USB data and power connections off and back on.

Less frequently, the audio-interface device inside `Beat Nexus` may need to be restarted. This can only be done by removing and restoring power to the entire device, or opening the center-case of the device as described below. On these occasions when the audio-interface has been malfunctioning, there is a preference inside `Ableton Live` where an audio interface can be selected as the output device. The `Focusrite` audio interface may need to be re-selected here.

## Advanced

The center-case of `Beat Nexus` contains the computer, audio interface, and other main internals of the device.

![Beat Nexus center casework.]({{ '/assets/images/BN_Casework.jpeg' | relative_url }})

### Accessing Internal Components

1. Remove (as many as eight) Phillips-head screws from underneath the white part of the case.
2. Life the top part of the case straight up and carefully set it aside.
3. There is a large white panel covered in electronics that must be partially disconnected and moved aside in order to access the internals below it. Note that the multicolored wires coming from this panel are short and ___CANNOT___ be disconnected. Disconnected only the "barrel" type power connected on this panel. Slightly lift this panel, rotate it around the point where the multicolored cables connect to it, and set it partly aside to access the internals.

### System Components

The internal components in the center-case are:

- Mac Mini
- Audio interface
- Headphone amplifiers (x2)
- Keyboard, mouse and monitor
- USB switches with remote-controls for disconnecting and reconnecting `Erae` touch-controllers (x2)
- Power switches with remote-controls for disconnecting and reconnecting `Erae` touch-controllers (x4)
- Power splitters
- USB hub(s)

The audio interface has a power switch on the rear. This interface may need to be turned off and back on after many weeks of operation.

The Mac Mini has a small power button on the rear. The computer is set to automatically restart after a power failure, but in rare cases this may not work. The computer can be manually started by pressing and releasing the power button once. The computer can also be forced to shut-down by holding down the power button for several seconds.

### Control Surfaces

The side-cases of Beat Nexus house an `Erae` touch-controller and two (2) triangular arcade buttons.

![Harmony station.]({{ '/assets/images/BN_Harmony.jpeg' | relative_url }})

!Rhythm station.]({{ '/assets/images/BN_Rhythm.jpeg' | relative_url }})

!Melody station.]({{ '/assets/images/BN_Melody.jpeg' | relative_url }})

!Bass station.]({{ '/assets/images/BN_Bass.jpeg' | relative_url }})

The touch-controllers inside these side-cases can be reset using remote-controls and so it should be a rare situation when these cases need to be opened.

#### Accessing Touch Controllers

__IMPORTANT NOTE #1__: These cases are mounted at an angle. Care must be taken that, when removing the cover ,the cover does not slide down or fall off, thus damaging the cables connected to it.

__IMPORTANT NOTE #2__: SHort cables are connected to the front covers of these cases. The covers __CANNOT__ be lifted off and set aside. YOU MUST PREPARE A TABLE OR STOOL IMMEDIATELY TO THE __RIGHT__ OF THE CASE YOU ARE OPENING where you will put the cover of the case so that its short cables are not damaged.

Opening the case:

1. Remove (as many as eight) Phillips-head screws from underneath the case, being careful not to let the cover slide away after removing the last screw.
2. Carefully set the cover onto the table or stool you prepared immediately to the __RIGHT__ of the case, being careful not to strain connected cables.

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
