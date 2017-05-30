__Description__: Changes in the yaml `.ctrrc` file should trigger webpack to recompile the ctr styles.

__Notes__

+  Writes out the `src/ctrrc-file.yml` to `(__dirname, './src/ctrrc-file.yml')` aka, the root dir for these tests.
+ Unlike the `/local` test this one as states writes `.ctrrc` into the root
