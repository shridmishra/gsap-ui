"use client";

import React, { useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
    code: string;
    language?: string;
    className?: string;
    showLineNumbers?: boolean;
    fontSize?: string;
}

export function CodeBlock({
    code,
    language = "tsx",
    className,
    showLineNumbers = false,
    fontSize = "0.875rem",
}: CodeBlockProps) {
    const { theme } = useTheme();

    const syntaxStyle = useMemo(() => {
        return theme === "dark" ? oneDark : oneLight;
    }, [theme]);

    return (
        <div className={cn("relative w-full overflow-hidden", className)}>
            <SyntaxHighlighter
                language={language}
                style={syntaxStyle}
                customStyle={{
                    margin: 0,
                    padding: "1.25rem",
                    background: "transparent",
                    fontSize: fontSize,
                    lineHeight: "1.7",
                    backgroundColor: "transparent",
                }}
                codeTagProps={{ style: { background: "transparent" } }}
                showLineNumbers={showLineNumbers}
                lineNumberStyle={{
                    minWidth: "2.5em",
                    paddingRight: "1em",
                    opacity: 0.3,
                    userSelect: "none",
                }}
            >
                {code.trim()}
            </SyntaxHighlighter>
        </div>
    );
}
