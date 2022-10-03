import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox>
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
      />
      {/* If it is blog type use `/projects/${id}`, by now use github link */}
      <LinkOverlay href={`/projects/${id}`} target="_blank">
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={16}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjectGithubGridItem = ({ children, title, url, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox>
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
      />
      <LinkOverlay href={url} target="_blank">
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={16}>{children}</Text>
    </LinkBox>
  </Box>
)
