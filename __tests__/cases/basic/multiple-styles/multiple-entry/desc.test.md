__Description__: Process multiple styles with multiple require entry points in a single files.

__Notes__

+ Currently, I think this is an anti-pattern and you should only have one entry point for `ctr` per `.js` file
+ You should avoid using `require` in `ctr` styles, however for testing purposes I use `require` in `/basic` and `requireWatch`, what you should use, in `/watch`
