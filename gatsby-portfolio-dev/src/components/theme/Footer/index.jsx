import React from 'react'
import { Container } from 'Common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Jordi Hermoso</h2>
				<span>
					© All rights are reserved | {new Date().getFullYear()} | Made with{' '}
					<span aria-label="love" className="darkmode-ignore" role="img">
						💚
					</span>{' '}
					by{' '}
					<a
						href="https://github.com/jordiup"
						rel="noopener noreferrer"
						target="_blank"
					>
						Jordi
					</a>
				</span>
				{/* <span>Illustrations by Katerina Limpitsouni - Undraw</span> */}
			</Details>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${icon}`}
					>
						<img width="34" src={icon} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
