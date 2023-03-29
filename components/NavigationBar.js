import { Avatar, Button, Container, Navbar, Text } from '@nextui-org/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

//TODO fix various errors, check web console

export default function NavigationBar() {
  const { data: session, status } = useSession();

  console.log({ session, status });

  return (
    <Navbar isBordered variant={'static'}>
      <Navbar.Brand>
        <Link href="/">
          <Text
            size={40}
            weight="bold"
            css={{ textGradient: '45deg, $blue600 -10%, $pink600 100%' }}
          >
            SEGS
          </Text>
        </Link>
      </Navbar.Brand>
      {/**<Navbar.Content>
        <Navbar.Item>
          <Navbar.Link>
            <Link href="/">
              <Text>Link 1</Text>
            </Link>
          </Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link>
            <Link href="/">
              <Text>Link 2</Text>
            </Link>
          </Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link>
            <Link href="/">
              <Text>Link 3</Text>
            </Link>
          </Navbar.Link>
        </Navbar.Item>
      </Navbar.Content>*/}
      <Navbar.Content>
        {status === 'authenticated' ? (
          <>
            <Navbar.Item>
              <Navbar.Link>
                <Link href={`/${session.user.id}`}>
                  <Text>{session.user.name}</Text>
                </Link>
              </Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link href={`/${session.user.id}`}>
                <Avatar
                  bordered
                  color="gradient"
                  src={session.user.image}
                  size="lg"
                  css={{
                    cursor: 'pointer',
                    ':hover': {
                      opacity: 0.8,
                    },
                  }}
                />
              </Link>
            </Navbar.Item>
            <Navbar.Item>
              <Button
                auto
                flat
                href="#"
                onClick={() => {
                  signOut('osu');
                }}
              >
                Log out
              </Button>
            </Navbar.Item>
          </>
        ) : (
          <Navbar.Item>
            <Button
              auto
              color={'gradient'}
              href="#"
              onClick={() => {
                signIn('osu');
              }}
            >
              Log in
            </Button>
          </Navbar.Item>
        )}
      </Navbar.Content>
    </Navbar>
  );
}
