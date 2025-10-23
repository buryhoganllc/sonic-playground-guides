---
title: Sounds Amazing Operating Guide
layout: default
permalink: /sounds-amazing/
---
<img src="{{ '/assets/images/SA_SoundsAmazingLogo.png' | relative_url }}" alt="OpenDeck Controller Board." height="200">

## Sonic Playground Interactive Exhibit - Information and Troubleshooting Guide

*Sounds Amazing* has designed five (5) unique activities for *Sonic Playground.* The hardware and technology is nearly identical across four (4) of these five activities, the exception being the wall-mounted *Loop Station* featuring three (3) Apple iPad stations.

The following information details the hardware and functionality of these activities and how they operate.

>[Jump to Activity-Specific Settings](#activity-specific-settings)

### Common Hardware

Each activity a similar hardware platform. Maintaining commonality between the activities makes it easier to understand, manage and troubleshoot the systems.

The hardware used provides a extensive flexibility, and using off-the-shelf technology ensures a more robust system.

#### Computer

All of the activities - with the exception of *Loop Station* - run on Mac Mini computers, equipped with 8 GB of internal memory and an Apple Silicon M1 chipset.

#### Controller Board

Each activity - with the exception of *Loop Station* - has an `OpenDeck` controller board. These boards provide input from the buttons on the user interface, control the LED lights inside the buttons, and send and receive MIDI information for each activity.

To make these systems easy to troubleshoot and install, we have added breakout terminal blocks for all of the necessary connectivity. Each ribbon cable has sixteen (16) connections, which facilitate eight (8) contact closures from the `HAPP` buttons on the user interface, **OR** eight (8) LED lights within each button.

<img src="{{ '/assets/images/SA_OpenDeck.png' | relative_url }}" alt="OpenDeck Controller Board." height="700">

The terminal blocks are set up in two pairs. Two of the terminal blocks provide connectivity to the contract closures (button *push*), while the other two provide connectivity to the LED lights inside of each button.

**NOTE** - the standard bulbs in the `HAPP` buttons have been replaced with 5V LED lights to ensure long life. If there is a light not working, it's most likely the wiring, not the bulb itself.

<img src="{{ '/assets/images/SA_TerminalBlocks.png' | relative_url }}" alt="Terminal Blocks." height="700">

### Open Deck Configurator

Each `OpenDeck` board is connected to the Mac Mini via USB cable. Every Mac Mini has a software application called `OpenDeck Configurator` (ODC) installed. The ODC will allow you to troubleshoot the operation of the `OpenDeck` board.

Opening the application will present the following window:

<img src="{{ '/assets/images/SA_OpenDeckConfigurator.png' | relative_url }}" alt="OpenDeck Configurator." height="700">

Click once on the `Button` icon to check the contact closures within the buttons.

#### Checking if a Button is Operating

Use this to verify that the `HAPP` buttons are activating the `OpenDeck` board. If you do nto see one of the cells illuminate when you press a button, teh most likely cause is that the wire is disconnected or broken.

Pressing any button will show activity on the associated cell in the `Button` view. If the onscreen button cell does not illuminate, it could be *below* the initial view of the application window. You may need to scroll down to display higher cell numbers. The button numbers associated with each activity are represented in the table in the following section.

<img src="{{ '/assets/images/SA_OpenDeckButtons.png' | relative_url }}" alt="OpenDeck Buttons." height="700">

#### Button Lights

To check the lights inside of the buttons, click on the `LED` tab, then select a button/connection to test. Refer to the following tables for a list of which LEDs on the `OpenDeck` board associated with each activity.

#### Button I/O for DRUM MACHINE

| Buttons     | Lights | Contact |
| ----------- | -------| ------- |
| Start       | 0      | 0       |
| Back        | 1      | 8       |
| Next        | 2      | 16      |
| Record      | 3      | 24      |
| Just Play   | 4      | 32      |
| Track1      | 5      | 40      |
| Track2      | 6      | 48      |
| Track3      | 7      | 56      |
| Restart     | 8      | 1       |
| Volume Down | 14     | 57      |
| Volume Up   | 15     | 49      |

#### Button I/O for RAP/FREESTYLE

| Buttons     | Lights | Contact |
| ----------- | -------| ------- |
| Start       | 0      | 0       |
| Next        | 1      | 8       |
| Playback    | 2      | 16      |
| Track1      | 4      | 32      |
| Track2      | 5      | 40      |
| Track3      | 6      | 48      |
| Restart     | 3      | 24      |
| Volume Down | 14     | 9       |
| Volume Up   | 15     | 1       |

#### Button I/O for SAMPLING

| Buttons     | Lights | Contact |
| ----------- | -------| ------- |
| Start       | 0      | 0       |
| Back        | 1      | 8       |
| Next        | 2      | 16      |
| Record      | 3      | 24      |
| Just Play   | 4      | 32      |
| Track1      | 5      | 40      |
| Track2      | 6      | 48      |
| Track3      | 7      | 56      |
| Restart     | 8      | 1       |
| Volume Down | 14     | 57      |
| Volume Up   | 15     | 49      |

#### Button I/O for TURNTABLE

| Buttons     | Lights | Contact |
| ----------- | -------| ------- |
| Start       | 0      | 0       |
| Option1     | 1      | 8       |
| Option1     | 2      | 16      |
| Option3     | 3      | 24      |
| Just Play   | 4      | 40      |
| Restart     | 5      | 40      |
| Volume Down | 14     | 57      |
| Volume Up   | 15     | 49      |

The lights go through a startup sequence. If you reboot the Mac Mini, you should see each button briefly illuminate.

<img src="{{ '/assets/images/SA_OpenDeckLights.png' | relative_url }}" alt="OpenDeck Lights." height="700">

## Activity Specific Settings

### DRUM MACHINE

The drum machine instrument in the activity requires that two (2) buttons be engaged: in the lower left panel there are eight (8) buttons that allow the use to have eight (8) variations of each pattern. In this activity, we are only utilizing the **A** variation. The **A** button must be illuminated as shown below.

Having the **Ptrn Select** button engaged - located on the left side - while not mandatory for the user experience, allows you to verify that the Program Changes are reaching the `Roland TR-8S` drum machine. It is recommended that this button be engaged to verify proper operation.

**NOTE** - these button selections are retained after a power cycle of the drum machine instrument. If you must remove the instrument from the enclosure, verify that the buttons are in their correct state once the device is re-installed.

<img src="{{ '/assets/images/SA_DrumMachineRolandTR8S.png' | relative_url }}" alt="Roland TR-8S Drum Machine." height="700">

### RAP/FREESTYLE

The `Rap/Freestyle` booth sues a similar setup to the `Sampling` activity, with some notable exceptions.

> **NOTE** - it is critical on this and all activities that nothing onscreen is changed.
> Even leaving a track selected may prevent the activity from properly functioning.
> Whichever track is selected in teh faders at the bottom of the screen when the `Cubase` project is saved dictates which track will be recorded on.

#### Intro Videos

The underlying `Unity` code plays the *Big Les* videos as is. These videos are *NOT* routed through `Cubase.`

#### Big Tig Videos

The *Big Tig* videos utilize a hybrid approach. These videos have been brought into `Cubase` and the audio for them reside on a track within the `Cubase` project, along with music for that track.  
The User's audio is recorded on the track below.

#### Troubleshooting - Rap/Freestyle

If audio plays from the *Big Les* videos but **NOT* from the *Big Tig* videos, the likely cause is a problem in `Cubase`:

- check the audio settings in `Cubase`. Go to `Studio/Audio` connections. In the resulting window, you will see tabs for `Inputs`, `Outputs`, `Group/FX`, etc.
- Select `INPUTS` and verify that Inputs 1 and 2 are selected from the `Rubix` interface.
- Select `OUTPUTS` and verify that the `Rubix` is selected as the destination device.
- Check the Mac Mini's audio settings. Go to `System Settings>Sound>Output` and select `Rubix.`

### SAMPLING

The sampling activity uses `Cubase Pro` to house the `Kontakt` banks - the three (3) content containers for the activity. These banks in `Kontakt` and the settings in `Cubase` should not be changed or updated in any way.

### Lumi Keyboards

There are two (2) `Lumi` keyboards being used for the sampling activity. The control/MIDI information is sent from the first keyboard (left side). The MIDI information from the keyboard on the right side is sent via the multiline connectors between the two keyboards. All MIDI information to the Mac Mini is sent via the USB-C connection on the left keyboard.

**NOTE** - the keyboard on the right is connected to a power source *ONLY* to supply operating power to the unit. It is *NOT* connected to the host Mac Mini. Do not change this configuration.

#### Keyboard Goes Dark

If the keyboard does not illuminate, the most likely issue is that the USB cable has become disconnected or damaged. After checking all connections, perform a power cycle of both keyboards. The power button is located on the rear, near the USB-C port.

#### Replacing Lumi Keyboards

The `Lumi` keyboards have a setting added to them to show the specific colors required for the activity. If one of the keyboards fails and must be replaced, the replacement keyboard will first need to be configured. Please contact `Sounds Amazing` for assistance.

### TURNTABLE

The turntables have their own setup requirements after a power cycle.

Each of the two (2) `RANE Twelve` turntable controllers must be assigned to a deck number so that `Serato`, the underlying DJ software, understands which turntable controls which track.

#### After A Power Cycle

You will see four (4) numbered lights flashing on each of the turntables. We have drilled small holes in the plexiglass covering the turntable controls sot that you can access these buttons.

<img src="{{ '/assets/images/SA_turnTable_Left.png' | relative_url }}" alt="Left Deck - Setting Deck Number.">

<img src="{{ '/assets/images/SA_turnTable_Right.png' | relative_url }}" alt="Right Deck - Setting Deck Number.">

#### Mixer

If the mixer goes to sleep, it will also require a power cycle. Open the drawer beneath the turntables, unplug the mixer power and then restore power to restart the device.

### LOOP STATION

The three (3) `LOOP STATION` activities use Apple iPads running the `LaunchPad` iPadOS application. All three stations have been curated with custom content from `SoundTrack Loops.`

To prevent the users from changing settings, we utilize the built-in `Guided Access` feature of iPadOS. This feature, found in `System Settings>Accessibility>General>Guided Access`, allows us to block off certain features of the iPad and application, including access to other sound banks, volume controls, filters, etc. Each of these functions has the ability to render the activity unresponsive.

### Troubleshooting - Loop Station

### Blank Screen

- verify that the USB-C power cable is connected to the iPad
- verify that the power supply (charging brick) is connected to power in the closet area behind the iPads
- verify that all connections on the power/breakout connector are seated and snug

### The Screen Layout is Incorrect

- `Guided Access` mode may have been disrupted. Verify that `Guided Access` is enabled.
  - If need be, turn off `Guided Access` and turn it back on following the steps below

### Resetting Guided Access Mode

- open the kiosk containing the iPad
- press the `HOME` button rapidly three (3) times. A numeric password screen appears.
- enter the iPad password
- Quit `Guided Access`
- Restart `Guided Access`, making sure that the proper screen area is blocked off:
  - rapidly press the `HOME` button three (3) times. The screen will display `Start` in the upper right corner.
  - Press `Start`
  - Draw a circle or square around the areas to block out. Refer to the image below:

<img src="{{ '/assets/images/SA_Loops.png' | relative_url }}" alt="Loop Station - Guide Access Block-Out Areas." height="700">
