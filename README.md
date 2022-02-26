
##Typescript

####repl
* `node` opens command-line javascript repl
* `.exit` to exit node repl

####compile
*typescript compiles to javascript, which is then run as a script*
* `ts <filename>.ts` from command-line in directory of typescript file
* run generated <filename>.js as script

####script
* `node <filename>.js` from command-line in directory of js file

####accepting CLI arguments
* add to program to grab & assign to `arg` and array of the arguments from the command line: `let arg = process.argv.slice(2);` 
* run program with arguments: `node <filename>.js <argument>`

##Kotlin

####repl
* `kotlinc-jvm` from the command-line
* `:quit` to exit kotlin repl

####compile
* `kotlinc <filename>.kt -include-runtime -d <programName>.jar` from commad-line in directory of kotlin file
* `java -jar <programName>.jar` to run program 

####scripting
* kotlin script files end with `.kts` instead of `.kt`
* `kotlinc -script <filename>.kt <args>` to run script
* CLI arguments are in an array that can be accessed with `val arguments = args`

######references
https://kotlinlang.org/docs/command-line.html

##Swift

####repl
* `swift` opens command-line repl
* `:q` to exit swift repl

####compiling
* `swiftc -o <programName> <fileName>.swift` from command-line in directory of swift program file
* `./<fileName>.swift` to run program

####scripting
* `#!/usr/bin/swift` at the top of the file
* `chmod +x <filename>.swift from command-line in directory of swift script
* `./<filename>.swift` to run script

####accepting CLI arguments
* add to program to grab & assign arguments from the command line: `let arg = CommandLine.arguments[1]`
* run program with arguments:
    * script: `./<filename>.swift <argument>
    * program: `./<programName> <argument>`

######References
https://jblevins.org/log/swift
https://ed.com/command-line-swift/
https://developer.apple.com/documentation/swift/commandline

