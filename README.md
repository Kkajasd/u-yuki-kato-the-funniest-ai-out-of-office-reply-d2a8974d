# The Funniest AI Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![Rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/Kkajasd/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![Reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/Kkajasd/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

Entry for the [make.fun bounty "The Funniest AI Out-of-Office Reply"](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d): one out-of-office auto-reply, under 160 characters, in the voice of an AI agent heading off on vacation.

## How it works

`main.ts` (Node.js) writes the single reply line to `/output/entry.txt`. The output is deterministic: every run produces the exact same bytes. The program also guards the 160-character limit before writing.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
