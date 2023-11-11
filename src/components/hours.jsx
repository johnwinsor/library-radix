import React from 'react';
import { Badge, Card, Container, Flex, Heading, Text} from '@radix-ui/themes'
import { FaRegClock } from "react-icons/fa";

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

async function getLibraryHours() {
  const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/c_b1631bcb3580a6cd93875bf2848dad1ea09747e99edcd4cc778301e7bb47a0ec@group.calendar.google.com/events?key=${process.env.GOOGLE_KEY}&maxResults=1&timeMin=${today.toISOString()}&timeMax=${tomorrow.toISOString()}&orderBy=startTime&singleEvents=True`, {
        method: 'GET',
    });
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

async function getScHours() {
  const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/c_6aa7be8d89dd7ebf573e717768faa890164256d38c823f7f5c5112dd0312cb8b@group.calendar.google.com/events?key=${process.env.GOOGLE_KEY}&maxResults=1&timeMin=${today.toISOString()}&timeMax=${tomorrow.toISOString()}&orderBy=startTime&singleEvents=True`, {
        method: 'GET',
    });
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export async function Hours() {
    const libraryData = await getLibraryHours()
    const scData = await getScHours()

    return (
      <Flex direction="column" align="end" className="w-40">
        <Flex direction="column">
          
          <Flex gap="2">
            <FaRegClock className="text-red-900 h-4 w-4 md:h-6 md:w-6 float-left" />
            <Text 
              size={{
                initial: '1',
                md: '4',
                xl: '7',
              }}>Today&apos;s Hours
            </Text>
          </Flex>
          <Flex gap="2" className="justify-end">
            <Text
              size={{
                initial: '1',
                md: '2',
                xl: '3',
              }}>F.W. Olin: {libraryData.items[0].summary}
            </Text>
          </Flex>
          <Flex gap="2" className="justify-end">
            <Text
              size={{
                initial: '1',
                md: '2',
                xl: '3',
              }}>Heller Room: {scData.items[0].summary}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    )
  }