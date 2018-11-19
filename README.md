React Sync State
===

> A React Helper that makes GLOBAL STATE.

As we all know, React manages components 'separately'.
So even you import the very same component its state is different within each instance you've created.  

To solve that problem, we have so many different kinds of state flow management tools such as Redux, MobX and so on.

But sometimes I don't need that much, I just need to share a few states across a few different places.
I feel like no matter which library that I would import is considered relatively unnecessary for this sort of jobs.

And that is how I find [Peter's repo](https://github.com/peterbee/react-singleton)

A Singleton HOC for React. Well, it is kinda like Singleton, BUT Still, I feel like it is more of Subscription than Singleton. So I fork it.

**That's it. It DOES NOT have any new features. I just Fork it and rewrite it with es-next, and add a demo page(it will go to here)**

To note that **I don't think it's the best way to share state across places to places.**
It's more like everything has its own place to be. This is more fit in small and light works.
If you got some heavy load of data or you need more precision of controls. Maybe you need Redux or Sagas to do the job.

I kept Peter's original [README](https://github.com/PulsGarney/react-sync-state/blob/master/README-Pete.md)
here as a snapshot in case he modified his. All credit goes to him. 🙌🙌


## Getting Started

23


## Best Practice

23
