---
title: Sampling Operating Guide
layout: default
permalink: /sampling/
---

## Sonic Playground Interactive Exhibit

### SAMPLING - Information and Troubleshooting Guide

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

To check the lights inside of the buttons, click on the `LED` tab, then select a button/connection to test. Refer to the following table for a list of which LEDs on the `OpenDeck` board associated with the `Sampling` activity.

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

The lights go through a startup sequence. If you reboot the Mac Mini, you should see each button briefly illuminate.

<img src="{{ '/assets/images/SA_OpenDeckLights.png' | relative_url }}" alt="OpenDeck Lights." height="700">

## Activity Specific Settings

The sampling activity uses `Cubase Pro` to house the `Kontakt` banks - the three (3) content containers for the activity. These banks in `Kontakt` and the settings in `Cubase` should not be changed or updated in any way.

### Lumi Keyboards

There are two (2) `Lumi` keyboards being used for the sampling activity. The control/MIDI information is sent from the first keyboard (left side). The MIDI information from the keyboard on the right side is sent via the multiline connectors between the two keyboards. All MIDI information to the Mac Mini is sent via the USB-C connection on the left keyboard.

**NOTE** - the keyboard on the right is connected to a power source *ONLY* to supply operating power to the unit. It is *NOT* connected to the host Mac Mini. Do not change this configuration.

### Keyboard Goes Dark

If the keyboard does not illuminate, the most likely issue is that the USB cable has become disconnected or damaged. After checking all connections, perform a power cycle of both keyboards. The power button is located on the rear, near the USB-C port.

### Replacing Lumi Keyboards

The `Lumi` keyboards have a setting added to them to show the specific colors required for the activity. If one of the keyboards fails and must be replaced, the replacement keyboard will first need to be configured. Please contact `Sounds Amazing` for assistance.
