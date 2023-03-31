﻿---
title: "Setting up the project: Physics Engine Tutorial 0"
date: "31/3/2023"
cover_image: "images/posts/physics/sim0_cover.png"
tags: ["physics", "simulation", "tutorial"]
excerpt: "We'll start working on a physics engine to explore the wonderfull world of dynamics and mechanics!"
---

For the last few months, I've been writing almost exclusively about my game. I'm still working on it, and I'll be posting more devlogs, but I also want to write about other stuff. So this will be the first in a series of tutorials about making a physics engine from scratch with C#. Why? Because I like physics. So without further ado, let's get started.

## Creating the project and making the visualisation
Before we start making a physics simulation, we need some way to view what the simulation is computing. For the sake of simplicity, I'll use [Raylib](https://www.raylib.com/index.html), and it's [C# bindings](https://github.com/ChrisDill/Raylib-cs). It's very easy to pick up (I hadn't ever used it, but I found my way around it in less than a day) and its simplicity will allow us to focus oon the physics. Furthermore, I'll be using Visual Studio to do the coding, so the process I'll describe for installing the library will be for Visual Studio.

First, I created a new C# project. To get a clean slate, I chose a Console App. I named the solution PhysicsSim and the project PhysicsSimTester, but you can choose other names. Then I added another project to the solution, specifically a class library, named PhysicsSim. The class library will be the actual physics simulator, while the console app will only use it, in order to allow us to test our physics code. From now on, I'll refer to the class library as the *'library'* and to the console app as the *'tester'* We'll be starting by making a particle based engine, and then upgrade it to handle rigidbodies. So let's add a new class called ``Particle`` to the library. For now, I'll leave it blank. We'll come back to it later, I only added it this soon so we can prepare a skeleton for the testing code. That way, I can get it out of the way early, and then focus on implementing the physics.

Now we need to install the ``raylib-cs`` NuGet package. If you don't know how to install a NuGet package, search it up. Also, we'll have to add a reference to the library in the tester. With this out of the way, we can start coding. Let's open up the autogenerated Program.cs in the tester. At the top we'll add references to Raylib, the physics library and to the tester namespace
```cs showLineNumbers
using Raylib_cs;
using PhysicsSim;
using PhysicsSimTester;
```

Inside the ``Main`` function, we'll write the following code:
```cs showLineNumbers
private static void Main(string[] args) 
        // Initialize Raylib
        Raylib.InitWindow(800, 800, "Physics Sim");
        Raylib.SetTraceLogLevel(TraceLogLevel.LOG_ALL);
        Raylib.SetTargetFPS(200);
        
        // Core loop
        while(!Raylib.WindowShouldClose()) {
            Raylib.BeginDrawing();
            Raylib.ClearBackground(Color.BLACK);
            Raylib.DrawCircle(400, 400, 100, Color.WHITE);
            Raylib.EndDrawing();
        }

        Raylib.CloseWindow();
    }
```

First, we open a 800 by 800 window, tell Raylib to log everything and set the framerate to 200. Then we loop until Raylib tells us we should close the window. Every frame, we prepare for drawing, clear the canvas, draw a circle and send out the new frame. If you run this code, you should get something like fig. 1.
&&&img[images/posts/physics/raylib_helloworld.png](Figure 1) A simple Raylib program.
&&&

Next we'll add a ``Visualisation`` class. This will be what actually draws things to the screen in the final program.
```cs showLineNumbers
using PhysicsSim;
using Raylib_cs;

namespace PhysicsSimTester
{
    public static class Visualization
    {
        public static int Res;
        public static int TextUnits { get => Res / 100; }
        public static Font font;
        
        private const int maximumStoredDeltaTimes = 64;
        private static int currentDeltaTimeIndex = 0;
        private static float sumOfDeltaTimes = 0;
        private static float[] previousDeltaTimes = new float[maximumStoredDeltaTimes];

        public static void DrawAll(params Particle[] objects) {
            foreach (var obj in objects) {
                Draw(obj);
            }
        }
        public static void Draw(Particle obj) {
            
        }

        public static void DrawDebugInterface(float dt) {
            float avg = ProcessDeltaTime(dt);
            DrawDebugLine($"{(1 / avg).ToString("F0")} FPS", 2, 2);
            DrawDebugLine($"{(dt*1000).ToString("F4")}Δt (in ms)", 2, 4);
        }
        private static float ProcessDeltaTime(float dt) {
            sumOfDeltaTimes -= previousDeltaTimes[currentDeltaTimeIndex];
            sumOfDeltaTimes += dt;
            previousDeltaTimes[currentDeltaTimeIndex] = dt;
            currentDeltaTimeIndex = (currentDeltaTimeIndex + 1) % maximumStoredDeltaTimes;
            return sumOfDeltaTimes / maximumStoredDeltaTimes;
        }
        private static void DrawDebugLine(string line, float x, float y) {
            Raylib.DrawTextEx(font, line, new System.Numerics.Vector2(x * ScreenUnit, y * ScreenUnit),
                    (int)(2.6 * ScreenUnit), (int)(ScreenUnit / 3), Color.RAYWHITE);
        }
        private static void DrawDebugLine(string line, float x, float y, Color color) {
            Raylib.DrawTextEx(font, line, new System.Numerics.Vector2(x * ScreenUnit, y * ScreenUnit),
                    (int)(2.6 * ScreenUnit), (int)(ScreenUnit / 3), color);
        }
    }
}

```

Thats's a lot, so let's break it down. The first few variables are just useful miscelaneous stuff. Then we have a few variables related to delta time. Usually in programming, delta time refers to the duration of the last frame, which has many applications.  Here, we're storing a list of the last 64 delta times, so we can average them (that's what ProcessDeltaTime does). We need an average because otherwise the number would always be changing, which would make it hard to read. We then declare a ``DrawAll`` function which is responsible for drawing all the particles to the screen. To achive this, it calls ``Draw`` for every particle. For now, ``Draw`` does nothing, so we'll have to come back to it. We also have a function to draw some usefull debugging information to the screen. It only displays the framerate and delta time, but as we move on we'll add more and more info to it.

Now it's only a matter of calling these functions from ``Main``.
```cs showLineNumbers
private static void Main(string[] args) 
        // Initialize Raylib
        Raylib.InitWindow(800, 800, "Physics Sim");
        Raylib.SetTraceLogLevel(TraceLogLevel.LOG_ALL);
        Raylib.SetTargetFPS(200);
        
        // Core loop
        while(!Raylib.WindowShouldClose()) {
            Raylib.BeginDrawing();
            Raylib.ClearBackground(Color.BLACK);
            Visualization.DrawAll();
            Visualization.DrawDebugInterface(Raylib.GetFrameTime());
            Raylib.EndDrawing();
        }

        Raylib.CloseWindow();
    }
```

And this concludes what we could call the frontend of this app. Before we start implementing the simulation itself, it's necessary to review a lot of maths and physics. So, not to make this post enormous, I'll postpone that for the next post, making this one a shorter one. I'm really excited for this project, and I hopefully so are you. Until the next time, have some fun toying around with Raylib! As a side note, I'd advise you to study some [calculus](https://youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr) and [linear algebra](https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) while you're waiting for the next post, especially if you don't know much about these topics, because they'll be very important. And finally, you can find the source code for this project (although at a later stage) on [GitHub](https://github.com/levimcgomes/PhysicsSim)