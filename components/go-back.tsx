import Link from 'next/link'
import { GoBackProps } from '@/interfaces'

export const GoBack = ({ href }: GoBackProps) => {
  return (
    <Link
      href={href}
      className="flex size-11 items-center justify-center rounded-md border-2 border-solid border-transparent hover:border-button-color"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
        ></path>
      </svg>
    </Link>
  )
}
