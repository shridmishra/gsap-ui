export function transformTsToJs(code: string): string {
  // 1. Remove "import type ..."
  let js = code.replace(/^import type .*$/gm, "");

  // 2. Remove interfaces and types (very basic)
  js = js.replace(/^(export )?(interface|type) \w+[\s\S]*?^}/gm, "");

  // 3. Remove generics <T>
  // This is tricky with regex, handling simple cases like <T> or <T, U>
  // Avoid matching HTML tags like <div>
  js = js.replace(/<[A-Z][a-zA-Z0-9, ]+>/g, (match) => {
    // Heuristic: if it looks like a component usage <Component ...> keep it
    // If it looks like a specific type component <Type>...
    if (match.includes(" ")) return match; // unlikely to be just a generic parameter list if spaces (unless <T, U>)
    return ""; 
  });

  // 4. Remove type annotations like ": string" or ": React.FC<Props>"
  // We need to be careful not to match object keys or ternaries
  // A safe-ish approach for function args and variable declarations
  js = js.replace(/:\s*[A-Z][a-zA-Z0-9.]+(<[^>]+>)?(\[\])?/g, ""); 
  
  // 5. Remove "as Type"
  js = js.replace(/ as [A-Z][a-zA-Z0-9.]+(<[^>]+>)?/g, "");

  // 6. Clean up empty lines
  js = js.replace(/^\s*[\r\n]/gm, "");

  return js;
}

// A better regex-based approach based on common patterns
// This is NOT perfect. Use with caution.
export function stripTypes(code: string): string {
  let result = code;

  // Remove import type
  result = result.replace(/import type \{([^}]+)\} from "([^"]+)";?/g, 'import {$1} from "$2";');
  result = result.replace(/import type ([^ ]+) from "([^"]+)";?/g, 'import $1 from "$2";');

  // Remove interfaces and types
  result = result.replace(/(export )?(interface|type) [a-zA-Z0-9_]+(\s*<[^>]+>)?\s*\{[\s\S]*?\}/g, "");
  result = result.replace(/(export )?type [a-zA-Z0-9_]+(\s*<[^>]+>)?\s*=\s*[^;]+;/g, "");

  // Remove generics in function calls/definitions <T> (non-greedy)
  // Be careful with JSX. 
  // We only target function definitions like `function foo<T>()` or `const foo = <T>() =>`
  result = result.replace(/<[a-zA-Z0-9_,\s]+>(?=\()/g, ""); 

  // Remove return types ": Type" before " {" or " =>"
  result = result.replace(/:\s*[a-zA-Z0-9_.]+(<[^>]+>)?(\[\])?(?=\s*(=>|\{))/g, "");

  // Remove argument types "(arg: Type)"
  // This is hard. 
  
  // Basic TS removal strategy:
  // 1. Remove all interfaces/types
  // 2. Remove ": Type" patterns
  
  return result; // returning original for now as regex is too risky without a parser
}
