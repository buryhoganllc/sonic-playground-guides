---
title: Drum Machine Operating Guide
layout: default
permalink: /drum-machine/
---

## Sonic Playground Interactive Exhibit

### DRUM MACHINE - Information and Troubleshooting Guide

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

![OpenDeck Controller Board.]({{ '/assets/images/SA_OpenDeck.png' | height=700 | relative_url }})

The terminal blocks are set up in two pairs. Two of the terminal blocks provide connectivity to the contract closures (button *push*), while the other two provide connectivity to the LED lights inside of each button.

**NOTE** - the standard bulbs in the `HAPP` buttons have been replaced with 5V LED lights to ensure long life. If there is a light not working, it's most likely the wiring, not the bulb itself.

![Terminal Blocks.]({{ '/assets/images/SA_TerminalBlocks.png' | height=700 | relative_url }})

### Open Deck Configurator

Each `OpenDeck` board is connected to the Mac Mini via USB cable. Every Mac Mini has a software application called `OpenDeck Configurator` (ODC) installed. The ODC will allow you to troubleshoot the operation of the `OpenDeck` board.

Opening the application will present the following window:

![OpenDeck Configurator.]({{ '/assets/images/SA_OpenDeckConfigurator.png' | height=700 | relative_url }})

Click once on the `Button` icon to check the contact closures within the buttons.

#### Checking if a Button is Operating

Use this to verify that the `HAPP` buttons are activating the `OpenDeck` board. If you do nto see one of the cells illuminate when you press a button, teh most likely cause is that the wire is disconnected or broken.

Pressing any button will show activity on the associated cell in the `Button` view. If the onscreen button cell does not illuminate, it could be *below* the initial view of the application window. You may need to scroll down to display higher cell numbers. The button numbers associated with each activity are represented in the table in the following section.

![OpenDeck Buttons.]({{ '/assets/images/SA_OpenDeckButtons.png' | height=700 | relative_url }})

#### Button Lights

To check the lights inside of the buttons, click on the `LED` tab, then select a button/connection to test. Refer to the following table for a list of which LEDs on the `OpenDeck` board associated with the `Drum Machine` activity.

#### Button I/O for Drum Machine

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

![OpenDeck Lights.]({{ '/assets/images/SA_OpenDeckLights.png' | height=700 | relative_url }})

## Activity Specific Settings

The drum machine instrument in the activity requires that two (2) buttons be engaged: in the lower left panel there are eight (8) buttons that allow the use to have eight (8) variations of each pattern. In this activity, we are only utilizing the **A** variation. The **A** button bust be illuminated as shown below.

Having the **Ptrn Select** button engaged - located on the left side - while not mandatory for the user experience, allows you to verify that the Program Changes are reaching the `Roland TR-8S` drum machine. It is recommended that this button be engaged to verify proper operation.

**NOTE** - these button selections are retained after a power cycle of the drum machine instrument. If you must remove the instrument from the enclosure, verify that the buttons are in their correct state once the device is re-installed.

![Roland TR-8S.]({{ '/assets/images/SA_DrumMachineRolandTR8S.png' | height=700 | relative_url }})
