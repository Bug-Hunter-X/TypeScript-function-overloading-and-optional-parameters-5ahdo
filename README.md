# TypeScript Function Overloading and Optional Parameters

This repository demonstrates a common issue encountered when working with function overloading and optional parameters in TypeScript.  The `bug.ts` file showcases a scenario where the TypeScript compiler infers incorrect types due to optional parameters and function calls without providing values for those parameters. The `bugSolution.ts` file demonstrates several different ways to resolve the issue.

**Bug:**
The main issue arises when calling the overloaded function without explicitly passing arguments for optional parameters, resulting in the compiler failing to correctly infer the parameter types and leading to potential runtime errors. 

**Solution:**
The solution involves several strategies:
* Explicitly provide default values for optional parameters in the function signature to guide the compiler.
* Carefully manage and check function overload signatures. 
* Employ conditional type checks to narrow down the possibilities.

This example highlights the importance of understanding how TypeScript handles type inference with function overloading and optional parameters to avoid unexpected runtime behavior.  This problem is frequently encountered when working with asynchronous functions and callbacks where optional parameters are common.