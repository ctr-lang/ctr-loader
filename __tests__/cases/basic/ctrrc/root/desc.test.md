__Description__: Writes out the `src/ctrrc-file.yml` to `(__dirname, './src/ctrrc-file.yml')` aka, the root dir for these tests. Test verify both local variables -> `$$` and ctr options -> `option` are picked up

__Notes__

+ Unlike the `/local` test this one as states writes `.ctrrc` into the root
+ You should avoid using `require` in `ctr` styles, however for testing purposes I use `require` in `/basic` and `requireWatch`, what you should use, in `/watch`
