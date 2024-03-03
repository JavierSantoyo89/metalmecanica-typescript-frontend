
import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithubFilled,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./FooterCentered.module.css";

const links = [
  { link: "https://javiersantoyo.dev/", label: "Portfolio" },
  { link: "https://backendportfolio-r0uf.onrender.com/", label: "Backend" },
];
export default function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      // onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <MantineLogo size={28} />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <a href="https://twitter.com/FcoSantoyoRios" target="_blank">
              <IconBrandTwitter
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </a>
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <a
              href="https://www.linkedin.com/in/javiersantoyor/"
              target="_blank"
            >
              <IconBrandLinkedin
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </a>
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <a href="https://github.com/JavierSantoyo89" target="_blank">
              <IconBrandGithubFilled
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </a>
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
