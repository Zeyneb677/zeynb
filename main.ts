input.onButtonPressed(Button.A, function () {
    basic.showString("PRESS B")
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 4391, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showString("NYAN CAT")
    basic.showString("PRESS LOGO TO START")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("PRESS A+B TO MOVE")
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.ForeverInBackground)
    basic.showLeds(`
        . # . # .
        # . # . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
