__Description__: Basic test of the `requireWatch` functionality which is passed as the second argument on ctr-loader invocation. `requireWatch` is true to its name, it will first process the `ctr` styles just like `require` and then add those styles as a webpack dependency so that if they change they are recompiled

__Notes__

+ `requireWatch(<filePath>, <ctr instance>, ...<args>, <option>)`
    * `<filePath>` -> `String || Array of Stings`
        - Think of it like `require` but a `require` that watches your files, and if a file is changed it recompiled
    * `<ctr instance>`
        - Can be omitted, but will always be passed to the to the file which it is `require`-ing
    * `<args>`
        - You can pass auxiliary arguments to your watched file. This could be useful if you want to pass some custom variables or options
    * `<option>` -> last argument
        - `<option>.context`
        - Pass on args need be like options and such
+ The reason why we have to do this is because `require` will not recompile our styles when they change
+ Works for both dev and prod environments
