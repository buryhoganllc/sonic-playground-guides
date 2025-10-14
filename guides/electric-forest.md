---
title: Electric Forest Operating Guide
layout: default
permalink: /electric-forest/
---

## Electric Forest Operating Guide - updated 10/14/2025

## Sonic Playground - GRAMMY Museum

Please read this guide in its entirety before making changes to the *Electric Forest.*

## Overview

### Component Files

*Electric Forest* utilizes `Max`, `Ableton`, and `MadMapper` show files to host the sensor controls, audio playback, and LED behavior, respectively. *Electric Forest* runs on macOS systems. Show files exist in the “ELECTRIC FOREST SHOW FILES” folder on the Desktop.

- Max: `~/Desktop/ELECTRIC FOREST SHOW FILES/Max/ElectricForest_MAX.maxpat`
- Ableton: `~/Desktop/ELECTRIC FOREST SHOW FILES/Ableton/Version 310/ElectricForest_v310.als`
- MadMapper: `~/Desktop/ELECTRIC FOREST SHOW FILES/MadMapper/Version 3/ElectricForest_MultiShow_v3.mad`

### Standard Behavior

*Electric Forest* runs 24/7 and requires limited user intervention. Show files may be launched manually via their Desktop aliases, if necessary. The aliases are named to reflect the order in which they are to be run:

- `1 - MAX`
- `2 - ABLETON`
- `3 - MADMAPPER`

Allow each application to fully load before launching the next file. Once that is complete, hide `Max` and `MadMapper`, then select the desired `Ableton` scene from the `Power Manager` scheduled events list (see Scene Changes below). Leave `Power Manager` as the topmost application window.

### Version Control

**NEVER** save if prompted. All show files, in particular `Ableton` and `MadMapper`, receive a constant stream of control information when in operation. Those data streams are interpreted as unsaved changes from the default configuration of both applications. If you need to quit either application for any reason, **DO NOT SAVE**.

## Automation

### Startup & Shutdown

*Electric Forest* is hosted on an M2 Pro Mac Mini and runs 24/7 in a permanent attract/play mode. At present, there are NO automated power events on this system.

### Scene Changes (Light and Sound cues)

***As of 10/01/25,*** *Electric Forest* is programmed perform the John Carpenter mix during open hours, and the Shaun Chasin mix during closed hours.

Through `Power Manager` events, the Carpenter set will be triggered at 11AM SUNDAY-FRIDAY, and at 10AM SATURDAY.

At 5PM SUNDAY-FRIDAY, and 6PM SATURDAY, Shaun Chasin's original composition "Movements" will be triggered and will play overnight during the closed hours of the Museum.

30 minutes after the normal closing time, the surround stereo pairs will enter "Nighttime Mode" and dim approximately 10 dB. The surrounds will restore to normal level ("Daytime Mode") 30 minutes before the normal opening time of the Museum.

An example schedule of a typical open day such as Friday:

- 10:30AM -> surround stereo pairs go into “Daytime Mode” and bump up approximately 10 dB
- 11:00AM -> Carpenter playlist (seven tracks, each track has a different lighting look, runtime a bit over 20 minutes)
- 5:00PM   -> Chasin mix (our “normal” soundtrack, plays continuously over night)
- 5:30PM   -> surround stereo pairs go to “Nighttime Mode” and drop approximately 10 dB. See *Volume Control* section below.

When a scene event is triggered, the current playing audio fades out to silence over six (6) seconds as the tubes change color to the next look. The cued scene music will then begin playing. Audio is effectively continuous throughout the day. `MadMapper` will advance tube lighting scenes in synchronicity with Ableton, changing foreground and background colors. Manual scene changes are achieved via the `Power Manager` application window's Schedule list by selecting the appropriate “On Demand” event, such as `Ableton-Shaun Chasin.` See *Appendix B* for more information.

### Volume Control

`Power Manager` runs a “Nighttime Mode” script at 5:30PM SUNDAY-FRIDAY (6:30PM SATURDAY) to dim the output volume of the North and South surround speaker pairs by approximately 10dB. The individual tube speakers are unaffected.

A corresponding “Daytime Mode” script is run at 10:30AM SUNDAY-FRIDAY (9:30AM SATURDAY), to restore the North/South output levels to their default fader position (normal volume).

### Accessing the Host Machines

*Direct Access* - The *Electric Forest* wireless keyboard/trackpad controller is kept atop the equipment rack in the “closet” next to *Beat Nexus*.

*Remote Access* – The *Electric Forest* Mac Mini is accessible via `Jump Desktop`. `Jump Desktop` is the ideal access method for manually triggering scene changes or volume states via the `Power Manager` event list.

When troubleshooting a physical system issue, direct access is recommended.

*Authentication* – all admin accounts on the host machines use the admin credentials. Refer to the `Credentials.txt` file.

## Manual Intervention

*Electric Forest* is constructed to run autonomously, with manual intervention rarely necessary. Should you need to quit `Max`, `Ableton`, and/or `MadMapper`, do so ***WITHOUT SAVING.***

### Changing Ableton Behavior (song lists and volume states)

To change between the Shaun Chasin and Max Martin music sets on-demand, select the appropriate On Demand `Power Manager` event from the scheduler list by clicking the `Actions` menu and selecting `Perform.`

![Power Manager on-demand list from menu bar.]({{ '/assets/images/PM_SchedulerView.png' | relative_url }})

Selecting `Ableton-Max Martin` , `Ableton-Shaun Chasin` , or `Ableton-John Carpenter` will fade out the currently playing audio, crossfade the lights to the new cue, and then begin playback of the selected song mix.

You may also change the surround output level on-demand by selecting either `Ableton-Volume Daytime Mode` (normal volume) or `Ableton-Volume Nighttime Mode` (dimmed output, approximately 10 dB lower.)

### Overriding Scheduled Events

At times it may be necessary to manually trigger a music set/volume level keep it running beyond the point when the next scheduled event would occur (media days, special events, etc.) To override scheduled events, navigate to the `Power Manager` List View and un-check the appropriate Scheduled event.

For example, to set the Martin mix on-demand and prevent scheduled scene transitions to the Chasin mix, first select `Ableton-Max Martin` from the On Demand list (see above). Next, uncheck the `Shaun Chasin – Hourly` entry in the `Power Manager` Scheduler list:

![Power Manager cancelling scheduled events.]({{ '/assets/images/PM_ListView.png' | relative_url }})

Make sure to restore normal behavior by re-checking any unchecked boxes when your event has concluded.

### Muting Electric Forest

At times it may be necessary to mute the audio output of *Electric Forest* without stopping the lighting behavior (media days, private events, etc.) This mute state can be accomplished by shutting off the power to the loudspeaker distributors in the closet rack. Locate the “AUDIO POWER” Furman conditioner towards the bottom of the rack and turn it off. This will mute the audio system, leaving the lighting and sensing systems still active. Restore the Furman to an ON state to “unmute” *Electric Forest*.

## Changing Tube Behavior

*Electric Forest* is designed to be adaptable and updatable. At times it may be desirable to change the audio content of the show, and/or the behavior (color) of the pixel components.

### Changing Audio Content

*Electric Forest* is designed as a sixteen (16) channel mono immersive audio environment with two (2) stereo mixes facing out into the main gallery area. Audio content can be updated, but certain file preparation requirements must be met. Contact the interactive developer before making any changes to the Ableton file.

### Changing Lighting Intensity

At times it may be necessary to change the lighting intensity of the *Electric Forest* as a whole – dimming the LED output for photo/video shoots, for example.

To accomplish this:

- Open Safari on the Mac Mini
- Click the `Advatek Controller 1` bookmark from the bookmark bar to open the web interface for pixel controller 1 (tubes 1 through 8)
- Click the `ADMINISTRATOR` button
- Once the control page has loaded, click Pixel Outputs
- Locate the `INTENSITY` controls in the upper right corner.
- You can manually enter a value between 0 (off) and 255 (full) or use the slider. An intensity of 30% has proved useful for video shoots.
- Repeat these steps for controller 2 (tubes 9 through 16.) Locate the bookmark in the bookmark bar.
- When your event is complete, be sure to **RESTORE** the intensity to **FULL (100%)** for both controllers.

### Changing Lighting Behavior (Cues)

All tubes have a background (static) and foreground (active) color which creates the meter bridge effect for each scene. These colors can be adjusted if desired for special events, but certain conditions must be adhered to. Make sure you read and understand the following steps before proceeding. If there is any doubt, contact the developer.

- Create a new Scene in the `MadMapper` file. Set your desired transition time and fade shape.
- Navigate to the list of Tubes on the left and scroll down to select Tube 01.
- Navigate to the right to the shaders/effects list and locate `Fill`, which corresponds to Tube 01. Use the map on the inside of the closet door to identify where Tube 01 is located in physical space. You will also notice a `Fill-1`, `Fill-2`, etc. Each tube has a pixel effect assigned to it, which under normal conditions are all the same.
  - The title of the effect is offset -1 for each tube, so Tube 02 is Fill-1; Tube 10 is Fill-9; Tube 16 is Fill-15, etc.
- In the lower right area, you have the effects parameters for `Fill`. Locate the entries for Front Color and Back Color, which are represented by colored rectangles. Back Color is the static color that is always present. Front Color is the dynamic color that follows the peak level of the corresponding audio track.
- You can change either color setting by clicking the colored rectangle to reveal and change the hex code, by selecting one of the pre-defined colors, by using the color wheel, or by using the RGB value sliders.
  - *Note: because of the semi-opaque nature of the plexiglass tubes, very deep saturated colors that do not use the white channel in the pixels tend not to look that great. High contrast, bright colors read better. You will notice this right away if you dial up a deep purple or forest green.*
- Once you have found your new colors, right click on `Fill` and select `Copy All Settings`.
- Right click on `Fill-1` and select `Paste Settings`.
- Repeat these steps for the remaining “Fill-…” entries. Return to the Scenes/Cues list, right click on your newly created scene and select Update Scene.
- Enable Live mode to allow for single-click scene recall.

## Troubleshooting

### Electric Forest sensors are not registering movement

#### 1. Check that the sensor objects are enabled in Max

- Navigate to the Max window
- Look for movement in the two light blue fader objects in each group of channels
  - If you do not see movement, press the blue `STOP` button at the top of the patch.
  - Press the blue `START` button to re-enable network discovery and check for activity
- If these steps are unsuccessful, proceed to:
  
#### 2. Verify that the Phidget Network Server is active

- Launch Phidget Control Panel from the Dock (or `/Applications`)
- Navigate to the `Network Server` tab
- Look for a button that says `Stop Network Server` - this means the network server is *running*
  - If the button says `Start Network Server`, click it to *start* the server
- Return to Max and repeat step 1 above
- If these steps are unsuccessful, proceed to:

#### 3. Verify network privileges

- Launch System Settings
- Click `Privacy & Security`
- Scroll in the resulting window to `Local Network`
- Verify that all entries for `Max` are switched **ON**
- Return to `Max` and repeat step 1 above
- If these steps are unsuccessful, proceed to:
  
#### 4. Power cycle the sensing system

- Quit `Max`, `Ableton`, and `MadMapper` ***WITHOUT SAVING***
- Shutdown the Mac Mini
- Turn off the `PIXEL POWER` Furman conditioner (the upper unit with red labels)
- Flip power to breakers `23` and `24` in the electrical/data room behind the Davis Theatre - the breakers are labeled `MOOD LIGHTS`. Wait 10 seconds. Restore breaker power.
- Restore power to the `PIXEL POWER` Furman conditioner. Wait for the TP-Link network switch to fully boot.
  - Look for eighteen (18) green activity lights on the left side of the switch face - 16 sensor hubs; two Advatek pixel controllers.
- Boot the Mac Mini. You will see a nineteenth green activity light appear on the switch.
- Launch `Max` from the desktop alias (`1 - MAX`) and check for activity.
- If successful, launch `Ableton` and `MadMapper` from their respective desktop aliases.
- Open `Power Manager` and perform the appropriate events for the time of day - `Daytime` vs `Nighttime` mode; select the appropriate playlist; etc.

### Conducting a full system power cycle

#### Cutting power

At times it may be necessary to turn off the *Electric Forest* for maintenance, or in the event of a building or campus power outage.

- Quit `MadMapper`, `Ableton` and `Max`. **DO NOT** save.
- Shut down the Mac Mini.
- Turn off the `PIXEL POWER` Furman conditioner (red) and `AUDIO POWER` Furman conditioner (yellow).
- Turn off breakers for circuits `23` and `24` in the electrical/data room behind the Davis Theatre - the breakers are labeled `MOOD LIGHTS`
  - *the Electric Forest systems can remain in this off state if necessary*

#### Restoring power

- *If restoring from a temporary or maintenance outage, wait three minutes before restoring system power*
- Restore breaker power to circuits `23` and `24`
- Restore `PIXEL POWER` Furman. Wait for a full boot of the Furman and for the line voltage to be displayed.
- Restore `AUDIO POWER` Furman. Wait for a full boot of the Furman and for the line voltage to be displayed.
- Wait for the pixel system switch (TP-Link) to fully boot. The system is ready when you see eighteen (18) green activity lights on the left side of the switch face.
- Turn on the Mac Mini
- Once fully booted to the desktop, launch the application components from their Desktop aliases. The aliases are named to reflect the order in which they are run:
  - 1 - MAX
  - 2 - ABLETON
  - 3 - MADMAPPER
- **Allow each application to fully boot before moving on to the next one.**
- Open `Power Manager` and perform the appropriate events for the time of day - `Daytime` vs `Nighttime` mode; select the appropriate playlist; etc.

### One or more loudspeakers do not appear to be working

Use the tube map on the interior of the closet door to determine which channel number appears to be faulty. Locate the corresponding Core8 speaker distributor for the loudspeaker. The physical rack layout is as follows:

- Core8 (3) - Channels 17 - 24
- Core8 (2) - Channels 09 - 16
- Core8 (1) - Channels 01 - 08

- Look for a green link light and yellow PoE light on the face of the Core unit corresponding to the tube in question.
- If the PoE light is not present, verify that the corresponding dip switch is in the ON position.
- If the link light is not present, verify that the Cat6 cable is fully inserted at the loudspeaker and distributor.
- If both lights are present but audio cannot be heard, you may check Dante Controller to verify that the subscription is valid or contact the developer for remote support.

### Replacing System Components

Refer to the connection diagrams for information on replacing cables, peripherals, etc. If you determine that an *Electric Forest* tube is damaged and needs to be replaced entirely, contact the developer. It is recommended that the developer and a representative of Blackmouth Design be present the first time a tube is replaced in its entirety.

## Appendix A - MIDI Event Messaging

The scheduled and on-demand events in *Electric Forest* – scene changes, volume changes, etc. – are achieved by passing MIDI commands to `Ableton` and `MadMapper` via a command line utility.

Tube sensor input – the MIDI data stream that sets an individual track/tube fader position in response to visitor input – is also mapped to `Ableton` properties.

The event list is as follows:

### Track Volume Control (Audio Host)

| Chan | Message    | Byte 1 | Byte 2 | Device           | Path                              | Name                | Min Val    | Max Val   | Comments                        |
| ---- | ---------- | ------ | ------ | ---------------- | --------------------------------- | ------------------- | ---------- | --------- | ------------------------------- |
| 01   | CC         | 01     | var    | from max 1       | Max -> Ableton: 01-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 02     | var    | from max 1       | Max -> Ableton: 02-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 03     | var    | from max 1       | Max -> Ableton: 03-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 04     | var    | from max 1       | Max -> Ableton: 04-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 05     | var    | from max 1       | Max -> Ableton: 05-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 06     | var    | from max 1       | Max -> Ableton: 06-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 07     | var    | from max 1       | Max -> Ableton: 07-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 08     | var    | from max 1       | Max -> Ableton: 08-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 09     | var    | from max 1       | Max -> Ableton: 09-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 10     | var    | from max 1       | Max -> Ableton: 10-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 11     | var    | from max 1       | Max -> Ableton: 11-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 12     | var    | from max 1       | Max -> Ableton: 12-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 13     | var    | from max 1       | Max -> Ableton: 13-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 14     | var    | from max 1       | Max -> Ableton: 14-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 15     | var    | from max 1       | Max -> Ableton: 15-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |
| 01   | CC         | 16     | var    | from max 1       | Max -> Ableton: 16-Audio \| Mixer | Track Volume        | -60 dB     | 0 dB      | set track fader level           |

### Lighting Control (Pixel Mapping)

| Chan | Message    | Byte 1 | Byte 2 | Device           | Path                 | Name                | Min Val    | Max Val   | Comments                        |
| ---- | ---------- | ------ | ------ | ---------------- | -------------------- | ------------------- | ---------- | --------- | ------------------------------- |
| 02   | CC         | 01     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 01 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 02     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 02 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 03     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 03 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 04     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 04 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 05     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 05 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 06     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 06 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 07     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 07 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 08     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 08 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 09     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 09 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 10     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 10 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 11     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 11 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 12     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 12 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 13     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 13 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 14     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 14 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 15     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 15 color width | 0          | 127       | set color fill dynamic size     |
| 02   | CC         | 16     | var    | IAC Driver Bus 1 | Ableton -> MadMapper | Tube 16 color width | 0          | 127       | set color fill dynamic size     |

#### Transport/Output Control (Audio Host)

| Chan | Event      | Byte 1 | Byte 2 | Device           | Path              | Name                | Min Val    | Max Val   | Comments                                    |
| ---- | ---------- | ------ | ------ | ---------------- | ----------------- | ------------------- | ---------- | --------- | ------------------------------------------- |
| 03   | CC         | 01     | 127    | IAC Driver Bus 1 | Transport         | Start               |            |           | emulate press of START button               |
| 03   | CC         | 02     | 127    | IAC Driver Bus 1 | Transport         | Stop                |            |           | emulate press of STOP button                |
| 03   | CC         | 03     | var    | IAC Driver Bus 1 | simple.fade_send  | fade IN time        | 200 ms     | 10 sec    | set fade IN time (variable)                 |
| 03   | CC         | 03     | 0      | IAC Driver Bus 1 | simple.fade_send  | fade IN time        | 200 ms     | 10 sec    | set fade IN time to 200 ms                  |
| 03   | CC         | 03     | 72     | IAC Driver Bus 1 | simple.fade_send  | fade IN time        | 200 ms     | 10 sec    | set fade IN time to 4 sec                   |
| 03   | CC         | 04     | var    | IAC Driver Bus 1 | simple.fade_send  | fade OUT time       | 200 ms     | 10 sec    | set fade OUT time (variable)                |
| 03   | CC         | 04     | 94     | IAC Driver Bus 1 | simple.fade_send  | fade OUT time       | 200 ms     | 10 sec    | set fade OUT time to 6 sec                  |
| 03   | CC         | 05     | 1      | IAC Driver Bus 1 | simple.fade_send  | run FADE IN         | 200 ms     | 10 sec    | send FADE IN command to all receivers       |
| 03   | CC         | 05     | 127    | IAC Driver Bus 1 | simple.fade_send  | run FADE OUT        | 200 ms     | 10 sec    | send FADE OUT command to all receivers      |
| 03   | CC         | 20     | 127    | IAC Driver Bus 1 | A-North \| Mixer  | Track Volume        | -40 dB     | -2.5 dB   | set track fader level for Daytime mode      |
| 03   | CC         | 20     | 127    | IAC Driver Bus 1 | B-South \| Mixer  | Track Volume        | -40 dB     | -2.5 dB   | set track fader level for Daytime mode      |
| 03   | CC         | 20     | 79     | IAC Driver Bus 1 | A-North \| Mixer  | Track Volume        | -40 dB     | -2.5 dB   | set track fader level for Nighttime mode    |
| 03   | CC         | 20     | 79     | IAC Driver Bus 1 | B-South \| Mixer  | Track Volume        | -40 dB     | -2.5 dB   | set track fader level for Nighttime mode    |

### Cue Control (Pixel Mapping)

| Chan | Message    | Byte 1 | Byte 2 | Device           | Path                 | Name                | Min Val    | Max Val   | Comments                        |
| ---- | ---------- | ------ | ------ | ---------------- | -------------------- | ------------------- | ---------- | --------- | ------------------------------- |
| 04   | Note On    | 35     | 0      | IAC Driver Bus 1 | Scene 01 (Chasin)    |                     | 0          | 127       | recall scene                    |
| 04   | Note On    | 47     | 0      | IAC Driver Bus 1 | Scene 02 (Martin)    |                     | 0          | 127       | recall scene                    |
| 04   | Note On    | 48     | 1      | IAC Driver Bus 1 | Cue 02-1             |                     | 1          | 1         | cue recall                      |
| 04   | Note On    | 59     | 0      | IAC Driver Bus 1 | Scene 03 (Carpenter) |                     | 0          | 0         | recall scene                    |
| 04   | Note On    | 60     | 1      | IAC Driver Bus 1 | Cue 3-1              |                     | 1          | 1         | Village of the Damned           |
| 04   | Note On    | 60     | 2      | IAC Driver Bus 1 | Cue 3-2              |                     | 2          | 2         | Halloween (2018 version)        |
| 04   | Note On    | 60     | 3      | IAC Driver Bus 1 | Cue 3-3              |                     | 3          | 3         | Prince of Darkness              |
| 04   | Note On    | 60     | 4      | IAC Driver Bus 1 | Cue 3-4              |                     | 4          | 4         | The Shape Hunts Allyson         |
| 04   | Note On    | 60     | 5      | IAC Driver Bus 1 | Cue 3-5              |                     | 5          | 5         | Christine                       |
| 04   | Note On    | 60     | 6      | IAC Driver Bus 1 | Cue 3-6              |                     | 6          | 6         | The Fog                         |
| 04   | Note On    | 60     | 7      | IAC Driver Bus 1 | Cue 3-7              |                     | 7          | 7         | Weeping Ghost                   |

### Scene Control (Audio Host)

| Chan | Message    | Byte 1 | Byte 2 | Device           | Path                 | Name                | Min Val    | Max Val   | Comments                        |
| ---- | ---------- | ------ | ------ | ---------------- | -------------------- | ------------------- | ---------- | --------- | ------------------------------- |
| 05   | CC         | 03     | 127    | IAC Driver Bus 1 | Scene 3 (Chasin)     |                     |            |           | scene trigger                   |
| 05   | CC         | 04     | 127    | IAC Driver Bus 1 | Scene 4 (Martin)     |                     |            |           | scene trigger                   |
| 05   | CC         | 05     | 127    | IAC Driver Bus 1 | Scene 5 (Carpenter)  |                     |            |           | scene trigger                   |

## Appendix B – Event Automation

All scheduled events are handled via `Power Manager`. Event triggers execute shell script actions to send MIDI commands to various system components. Repeated events – scripts that are run multiple times a day on a schedule, are created by means of AppleScript commands to `Power Manager`.

### Creating repeating events (example: hourly)

```applescript
-- Power Manager repeated events.applescript
-- Created by: BRENDAN HOGAN
-- Created on: 7/23/25
--
-- Copyright © 2025 Bury, Hogan & Associates LLC, All Rights Reserved
--

use AppleScript version "2.4" -- Yosemite (10.10) or later
use scripting additions

tell application "Power Manager"
 
 -- Set inclusive start and end hours (24 hour notation)
 set startingHour to 10 -- 10am
 set endingHour to 18 -- 6pm
 -- Set days of the week to trigger
 set daysOfTheWeek to [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]
 
 set secondsPerHour to (60 * 60)
 
 -- Create the event in the workshop 
 tell workshop
  
  -- Create a new event
  set myEvent to make new event with properties {name:"Hourly event"} -- modify the name as needed
  
  -- Create a new trigger for every hour of the day
  repeat with i from 0 to 23
   if i ≥ startingHour and i ≤ endingHour then
    make new trigger daily with properties {seconds from midnight:i * secondsPerHour, days:daysOfTheWeek} at front of triggers of myEvent
   end if
  end repeat
  
 end tell
 
 -- Deploy the event
 tell event store to store these events myEvent
 
 -- Clean up the workshop
 empty workshop
 
end tell
```

### Creating repeating events with minute offsets (example: XX:45)

```applescript
-- Power Manager repeated events with offset.applescript
-- Created by: BRENDAN HOGAN
-- Created on: 7/23/25
--
-- Copyright © 2025 Bury, Hogan & Associates LLC, All Rights Reserved
--

use AppleScript version "2.4" -- Yosemite (10.10) or later
use scripting additions

tell application "Power Manager"
 
 -- Set inclusive start and end hours (24 hour notation)
 set startingHour to 10 -- 10am
 set endingHour to 18 -- 6pm
 
 -- Set days of the week to trigger
 set daysOfTheWeek to [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]
 
 set secondsPerHour to (60 * 60)
 set minutesOffset to 45 -- adjust this to change the offset in minutes (e.g., 15 for 15 minutes)
 set secondsOffset to minutesOffset * 60
 
 -- Create the event in the workshop 
 tell workshop
  
  -- Create a new event
  set myEvent to make new event with properties {name:"Hourly event with minute offset"}
  
  -- Create a new trigger for every hour within the range, offset by 45 minutes
  repeat with i from 0 to 23
   if i ≥ startingHour and i ≤ endingHour then
    set triggerTime to (i * secondsPerHour) + secondsOffset
    make new trigger daily with properties {seconds from midnight:triggerTime, days:daysOfTheWeek} at front of triggers of myEvent
   end if
  end repeat
  
 end tell
 
 -- Deploy the event
 tell event store to store these events myEvent
 
 -- Clean up the workshop
 empty workshop
 
end tell
```

### Creating MIDI events via shell scripting (example: Shaun Chasin mix)

Scheduled events such as `Ableton` scene changes execute shell scripts, such as the following example:

```bash
#!/bin/bash
# Run Shaun Chasin "Movements" mix and set lights
# Intel Macs from Homebrew
#path=/usr/local/Cellar/sendmidi
# Apple Silicon Macs from Homebrew
#path=/opt/homebrew/bin/sendmidi
# Binary installs
path=/usr/local/bin/sendmidi
#
cmd1="dev IAC Driver Bus 1 ch 3 cc 3 127" # fade out audio
cmd2="dev IAC Driver Bus 1 ch 4 note on 35 0" # LED scene 1
cmd3="dev IAC Driver Bus 1 ch 5 cc 3 127" # Shaun Chasin mix
cmd4="dev IAC Driver Bus 1 ch 3 cc 2 127" # stop transport
cmd5="dev IAC Driver BUs 1 ch 3 cc 3 1" # fade in audio
#
midiEvent1="$path $cmd1"
midiEvent2="$path $cmd2"
midiEvent3="$path $cmd3"
midiEvent4="$path $cmd4"
midiEvent5="$path $cmd5"
#
eval "$midiEvent1"
eval "$midiEvent2"
sleep 6
eval "$midiEvent4"
sleep 0.1
eval "$midiEvent5"
sleep 0.1
eval "$midiEvent4"
sleep 0.2
eval "$midiEvent3"
exit 0;
```

The shell scripts tell the command line utility to call the MIDI device “IAC Driver Bus 1” and pass messages with defined channels, message types, byte 1 values, and byte 2 values. These strings correspond to mapped parameters in `Ableton` and `MadMapper`.

*Note*: the Mac Mini running *Electric Forest* utilizes a binary install of the command line utility.

## Appendix C – Sonic Playground Color Guide

### Primary Color Palette - GLOBAL

- ![#f9a13a](https://placehold.co/32x32/f9a13a/f9a13a.png) `#f9a13a`
- ![#aed147](https://placehold.co/32x32/aed147/aed147.png) `#aed147`
- ![#ed5671](https://placehold.co/32x32/ed5671/ed5671.png) `#ed5671`

### Secondary Accents - GLOBAL

- ![#f0a8a8](https://placehold.co/32x32/f0a8a8/f0a8a8.png) `#f0a8a8`
- ![#ea6748](https://placehold.co/32x32/ea6748/ea6748.png) `#ea6748`
- ![#b1763b](https://placehold.co/32x32/b1763b/b1763b.png) `#b1763b`
- ![#fbe69a](https://placehold.co/32x32/fbe69a/fbe69a.png) `#fbe69a`
- ![#bdd362](https://placehold.co/32x32/bdd362/bdd362.png) `#bdd362`
- ![#4fbe9a](https://placehold.co/32x32/4fbe9a/4fbe9a.png) `#4fbe9a`
- ![#33628a](https://placehold.co/32x32/33628a/33628a.png) `#33628a`
- ![#642d43](https://placehold.co/32x32/642d43/642d43.png) `#642d43`
- ![#4d2f31](https://placehold.co/32x32/4d2f31/4d2f31.png) `#4d2f31`
- ![#292929](https://placehold.co/32x32/292929/292929.png) `#292929`
- ![#e1dedd](https://placehold.co/32x32/e1dedd/e1dedd.png) `#e1dedd`
- ![#ffffff](https://placehold.co/32x32/ffffff/ffffff.png) `#ffffff`

### Movements - Electric Forest

- ![#2913e1](https://placehold.co/32x32/2913e1/2913e1.png) `#2913e1 - Background`

- ![#ed5671](https://placehold.co/32x32/ed5671/ed5671.png) `#ed5671 - Foreground`

### Max Martin - Electric Forest

- ![#ea5670](https://placehold.co/32x32/ea5670/ea5670.png) `#ea5670 - Background`

- ![#fbd208](https://placehold.co/32x32/fbd208/fbd208.png) `#fbd208 - Foreground`

### John Carpenter - Electric Forest

- Cue 1 (Village of the Damned)
- ![#ea5670](https://placehold.co/32x32/95d2fd/95d2fd.png) `#95d2fd - Background`

- ![#fbd208](https://placehold.co/32x32/b92706/b92706.png) `#b92706 - Foreground`

- Cue 2 (Halloween Main Theme 2018)
- ![#ea5670](https://placehold.co/32x32/e19b13/e19b13.png) `#e19b13 - Background`

- ![#fbd208](https://placehold.co/32x32/ff0000/ff0000.png) `#ff0000 - Foreground`

- Cue 3 (Prince of Darkness Main Theme)
- ![#ea5670](https://placehold.co/32x32/aa1a21/aa1a21.png) `#aa1a21 - Background`

- ![#fbd208](https://placehold.co/32x32/6bba2c/6bba2c.png) `#6bba2c - Foreground`

- Cue 4 (The Shape Hunts Allyson)
- ![#ea5670](https://placehold.co/32x32/bb6e2e/bb6e2e.png) `#bb6e2e - Background`

- ![#fbd208](https://placehold.co/32x32/92b0bb/92b0bb.png) `#92b0bb - Foreground`

- Cue 5 (Christine Main Theme)
- ![#ea5670](https://placehold.co/32x32/5a9f96/5a9f96.png) `#5a9f96 - Background`

- ![#fbd208](https://placehold.co/32x32/c5140e/c5140e.png) `#c5140e - Foreground`

- Cue 6 (The Fog Main Theme)
- ![#ea5670](https://placehold.co/32x32/80d5e5/80d5e5.png) `#80d5e5 - Background`

- ![#fbd208](https://placehold.co/32x32/00ff08/00ff08.png) `#00ff08 - Foreground`

- Cue 7 (Weeping Ghost)
- ![#ea5670](https://placehold.co/32x32/cc000e/cc000e.png) `#cc000e - Background`

- ![#fbd208](https://placehold.co/32x32/0000f2/0000f2.png) `#0000f2 - Foreground`

## Appendix D – Clip Levels

### Shaun Chasin "Movements"

| Track    | Clip      | Clip Gain    |
| -------- | --------- | ------------ |
| 01       | Chasin 01 | +6 dB        |
| 02       | Chasin 02 | +6 dB        |
| 03       | Chasin 03 | +6 dB        |
| 04       | Chasin 04 | +6 dB        |
| 05       | Chasin 05 | +6 dB        |
| 06       | Chasin 06 | +6 dB        |
| 07       | Chasin 07 | +6 dB        |
| 08       | Chasin 08 | +6 dB        |
| 09       | Chasin 09 | +6 dB        |
| 10       | Chasin 10 | +6 dB        |
| 11       | Chasin 11 | +6 dB        |
| 12       | Chasin 12 | +6 dB        |
| 13       | Chasin 13 | +6 dB        |
| 14       | Chasin 14 | +6 dB        |
| 15       | Chasin 15 | +6 dB        |
| 16       | Chasin 16 | +6 dB        |

### Max Martin

| Track    | Clip      | Clip Gain    |
| -------- | --------- | ------------ |
| 01       | Martin 01 | -3 dB        |
| 02       | Martin 02 | -3 dB        |
| 03       | Martin 03 | -3 dB        |
| 04       | Martin 04 | -3 dB        |
| 05       | Martin 05 | -2 dB        |
| 06       | Martin 06 | -2 dB        |
| 07       | Martin 07 | -2 dB        |
| 08       | Martin 08 | -3 dB        |
| 09       | Martin 09 | -2 dB        |
| 10       | Martin 10 | -2 dB        |
| 11       | Martin 11 | -2 dB        |
| 12       | Martin 12 | -2 dB        |
| 13       | Martin 13 | -2 dB        |
| 14       | Martin 14 | -2 dB        |
| 15       | Martin 15 | -2 dB        |
| 16       | Martin 16 | -2 dB        |

### John Carpenter

Track 01 - "March of the Children"

| Track    | Clip        | Clip Gain    |
| -------- | ----------- | ------------ |
| 01       | Children 01 | -1 dB        |
| 02       | Children 02 | +1 dB        |
| 03       | Children 03 | -1 dB        |
| 04       | Children 04 | -1 dB        |
| 05       | Children 05 | -1 dB        |
| 06       | Children 06 | -1 dB        |
| 07       | Children 07 | -1 dB        |
| 08       | Children 08 |  +0 dB       |
| 09       | Children 09 | -1 dB        |
| 10       | Children 10 | -1 dB        |
| 11       | Children 11 | +1 dB        |
| 12       | Children 12 | -1 dB        |
| 13       | Children 13 | -1 dB        |
| 14       | Children 14 | -3 dB        |
| 15       | Children 15 | -1 dB        |
| 16       | Children 16 | -1 dB        |

Track 02 - "Halloween Main Theme 2018"

| Track    | Clip         | Clip Gain    |
| -------- | ------------ | ------------ |
| 01       | Halloween 01 | +10 dB       |
| 02       | Halloween 02 | +12 dB       |
| 03       | Halloween 03 | +4 dB        |
| 04       | Halloween 04 | +7 dB        |
| 05       | Halloween 05 | +4 dB        |
| 06       | Halloween 06 | +7 dB        |
| 07       | Halloween 07 | +4 dB        |
| 08       | Halloween 08 | +4 dB        |
| 09       | Halloween 09 | +5 dB        |
| 10       | Halloween 10 | +4 dB        |
| 11       | Halloween 11 | +4 dB        |
| 12       | Halloween 12 | +7 dB        |
| 13       | Halloween 13 | +1 dB        |
| 14       | Halloween 14 | +9 dB        |
| 15       | Halloween 15 | +0 dB        |
| 16       | Halloween 16 | +9 dB        |

Track 03 - "Prince of Darkness Main Theme"

| Track    | Clip        | Clip Gain    |
| -------- | ----------- | ------------ |
| 01       | Darkness 01 | +6 dB        |
| 02       | Darkness 02 | +6 dB        |
| 03       | Darkness 03 | +6 dB        |
| 04       | Darkness 04 | +6 dB        |
| 05       | Darkness 05 | +6 dB        |
| 06       | Darkness 06 | +6 dB        |
| 07       | Darkness 07 | +6 dB        |
| 08       | Darkness 08 | +6 dB        |
| 09       | Darkness 09 | +4 dB        |
| 10       | Darkness 10 | +6 dB        |
| 11       | Darkness 11 | +6 dB        |
| 12       | Darkness 12 | +8 dB        |
| 13       | Darkness 13 | +6 dB        |
| 14       | Darkness 14 | +6 dB        |
| 15       | Darkness 15 | +6 dB        |
| 16       | Darkness 16 | +6 dB        |

Track 04 - "The Shape Hunts Allyson"

| Track    | Clip     | Clip Gain    |
| -------- | -------- | ------------ |
| 01       | Shape 01 | +4 dB        |
| 02       | Shape 02 | +6 dB        |
| 03       | Shape 03 | +6 dB        |
| 04       | Shape 04 | +6 dB        |
| 05       | Shape 05 | +7 dB        |
| 06       | Shape 06 | +7 dB        |
| 07       | Shape 07 | +6 dB        |
| 08       | Shape 08 | +7 dB        |
| 09       | Shape 09 | +5 dB        |
| 10       | Shape 10 | +6 dB        |
| 11       | Shape 11 | +8 dB        |
| 12       | Shape 12 | +6 dB        |
| 13       | Shape 13 | +3 dB        |
| 14       | Shape 14 | +8 dB        |
| 15       | Shape 15 | +4 dB        |
| 16       | Shape 16 | +7 dB        |

Track 05 - "Christine Main Theme"

| Track    | Clip         | Clip Gain    |
| -------- | ------------ | ------------ |
| 01       | Christine 01 | +2 dB        |
| 02       | Christine 02 | +2 dB        |
| 03       | Christine 03 | +5 dB        |
| 04       | Christine 04 | +3 dB        |
| 05       | Christine 05 | +3 dB        |
| 06       | Christine 06 | +4 dB        |
| 07       | Christine 07 | +3 dB        |
| 08       | Christine 08 | +2 dB        |
| 09       | Christine 09 | +3 dB        |
| 10       | Christine 10 | +1 dB        |
| 11       | Christine 11 | +2 dB        |
| 12       | Christine 12 | +2 dB        |
| 13       | Christine 13 | +2 dB        |
| 14       | Christine 14 | +6 dB        |
| 15       | Christine 15 | +5 dB        |
| 16       | Christine 16 | +6 dB        |

Track 06 - "The Fog Main Theme"

| Track    | Clip      | Clip Gain    |
| -------- | --------- | ------------ |
| 01       | TheFog 01 | +4 dB        |
| 02       | TheFog 02 | +4 dB        |
| 03       | TheFog 03 | +4 dB        |
| 04       | TheFog 04 | +3 dB        |
| 05       | TheFog 05 | +3 dB        |
| 06       | TheFog 06 | +3 dB        |
| 07       | TheFog 07 | +4 dB        |
| 08       | TheFog 08 | +3 dB        |
| 09       | TheFog 09 | +3 dB        |
| 10       | TheFog 10 | +3 dB        |
| 11       | TheFog 11 | +3 dB        |
| 12       | TheFog 12 | +3 dB        |
| 13       | TheFog 13 | +3 dB        |
| 14       | TheFog 14 | +2 dB        |
| 15       | TheFog 15 | +3 dB        |
| 16       | TheFog 16 | +3 dB        |

Track 07 - "Weeping Ghost"

| Track    | Clip     | Clip Gain    |
| -------- | -------- | ------------ |
| 01       | Ghost 01 | +3 dB        |
| 02       | Ghost 02 | +3 dB        |
| 03       | Ghost 03 | +3 dB        |
| 04       | Ghost 04 | +2 dB        |
| 05       | Ghost 05 | +2 dB        |
| 06       | Ghost 06 | +2 dB        |
| 07       | Ghost 07 | +3 dB        |
| 08       | Ghost 08 | +2 dB        |
| 09       | Ghost 09 | +0 dB        |
| 10       | Ghost 10 | +2 dB        |
| 11       | Ghost 11 | +2 dB        |
| 12       | Ghost 12 | +2 dB        |
| 13       | Ghost 13 | +2 dB        |
| 14       | Ghost 14 | +2 dB        |
| 15       | Ghost 15 | +3 dB        |
| 16       | Ghost 16 | +3 dB        |

## Appendix E - Change Log

<!-- Run the 'Make Change Log' action to use this template. A 'log' directory will be created if necessary.-->

<!-- Use semantic versioning (X.Y.Z):
Given a version number MAJOR.MINOR.PATCH, increment the:
1. MAJOR version release with incompatible API changes
2. MINOR version releasing adding functionality in a backward compatible manner
3. PATCH version releasing backward compatible bug fixes
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format, e.g.. "2.6.0-alpha"

ALL builds start at __version 0.1.0__  
Initial production release = __1.0.0__ -->

### Interactive: Electric Forest (Ableton Live set)

- Host machine make/model: Mac Mini M2  
- OS version: macOS 15  
- Primary application version: Ableton Live Suite 12.2.5
- Primary application file version: "ElectricForest_v310.als"

### Version [3.1.0] - 10/08/2025

**Fixed:**

**Changed:**

**Added:**

- add "simple.fade_send.amxd" and "simple.fade_receive.amxd" devices to Audio and Routing tracks for Fade In/Out control
- add Power Manager events for on-demand FADE OUT (4 seconds) and FADE IN (6 seconds)
