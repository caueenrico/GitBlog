import { PostContentContainer } from "./styles";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";


interface IPostComplete {
  content: string;
}

export function PostComplete({content}: IPostComplete) {
  return (
    <PostContentContainer>
      <ReactMarkdown 
      children={content} 

      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            
      />
    
    </PostContentContainer>
  );
}