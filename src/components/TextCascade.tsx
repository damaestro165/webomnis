import React from 'react'

type TextSegment = {
  text: string
  className?: string
  breakBefore?: boolean
}

interface TextCascadeProps {
  segments: TextSegment[]
  className?: string
  active?: boolean
}

export const TextCascade: React.FC<TextCascadeProps> = ({
  segments,
  className = '',
  active = false,
}) => {
  let wordIndex = 0

  return (
    <span className={`text-cascade ${active ? 'is-visible' : ''} ${className}`}>
      {segments.map((segment, segmentIndex) => (
        <React.Fragment key={`${segment.text}-${segmentIndex}`}>
          {segment.breakBefore && <br className="hidden sm:block" />}
          {segment.text.split(' ').map((word) => {
            const currentIndex = wordIndex++

            return (
              <span
                key={`${word}-${currentIndex}`}
                className={`word ${segment.className ?? ''}`}
                style={{ '--word-index': currentIndex } as React.CSSProperties}
              >
                {word}
              </span>
            )
          })}
        </React.Fragment>
      ))}
    </span>
  )
}
