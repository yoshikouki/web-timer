# TypeScript Graph

```bash
tsg 
```

```mermaid
flowchart
    subgraph node//modules["node_modules"]
        node//modules/next/index.d.ts["next"]
        node//modules/tailwindcss/types/index.d.ts["tailwindcss"]
        node//modules/tailwindcss//animate/index.d.ts["tailwindcss-animate"]
        node//modules/next/dist/compiled///next/font/dist/types.d.ts["next"]
        node//modules/next/font/google/index.d.ts["next"]
        node//modules/clsx/clsx.d.mts["clsx"]
        node//modules/tailwind//merge/dist/types.d.ts["tailwind-merge"]
        node//modules/zod/index.d.ts["zod"]
        node//modules///hono/zod//validator/dist/esm/index.d.ts["@hono/zod-validator"]
        node//modules/hono/dist/types/index.d.ts["hono"]
        node//modules/hono/dist/types/adapter/vercel/index.d.ts["hono"]
        node//modules///types/react/index.d.ts["@types/react"]
        node//modules/next/headers.d.ts["next"]
        node//modules/next//view//transitions/dist/index.d.ts["next-view-transitions"]
        node//modules/hono/dist/types/client/index.d.ts["hono"]
        node//modules///radix//ui/react//slot/dist/index.d.mts["@radix-ui/react-slot"]
        node//modules/class_//variance//authority/dist/index.d.ts["class-variance-authority"]
        node//modules/next/link.d.ts["next"]
        node//modules/lucide//react/dist/lucide//react.d.ts["lucide-react"]
        node//modules///radix//ui/react//popover/dist/index.d.mts["@radix-ui/react-popover"]
        node//modules///radix//ui/react//icons/dist/index.d.ts["@radix-ui/react-icons"]
        node//modules///radix//ui/react//select/dist/index.d.mts["@radix-ui/react-select"]
        node//modules///radix//ui/react//slider/dist/index.d.mts["@radix-ui/react-slider"]
        node//modules///radix//ui/react//toggle/dist/index.d.mts["@radix-ui/react-toggle"]
        node//modules/next/navigation.d.ts["next"]
        node//modules///radix//ui/react//collapsible/dist/index.d.mts["@radix-ui/react-collapsible"]
        node//modules///radix//ui/react//scroll//area/dist/index.d.mts["@radix-ui/react-scroll-area"]
    end
    subgraph src["src"]
        subgraph src/components["/components"]
            subgraph src/components/timer["/timer"]
                src/components/timer/settings.ts["settings.ts"]
                src/components/timer/timer.ts["timer.ts"]
                src/components/timer/local//storage.ts["local-storage.ts"]
                src/components/timer/timer//provider.tsx["timer-provider.tsx"]
                src/components/timer/use//timer.ts["use-timer.ts"]
                src/components/timer/timer.test.ts["timer.test.ts"]
                src/components/timer/number//wheel.tsx["number-wheel.tsx"]
                src/components/timer/timer//controller.tsx["timer-controller.tsx"]
                src/components/timer/index.tsx["index.tsx"]
                src/components/timer/timer//header.tsx["timer-header.tsx"]
                subgraph src/components/timer/timer//controller//settings["/timer-controller-settings"]
                    src/components/timer/timer//controller//settings/finish//sound//selector.tsx["finish-sound-selector.tsx"]
                    src/components/timer/timer//controller//settings/finish//sound//volume//slider.tsx["finish-sound-volume-slider.tsx"]
                    src/components/timer/timer//controller//settings/font//selector.tsx["font-selector.tsx"]
                    src/components/timer/timer//controller//settings/horizontal//layout//toggle.tsx["horizontal-layout-toggle.tsx"]
                    src/components/timer/timer//controller//settings/index.tsx["index.tsx"]
                end
            end
            subgraph src/components/animated//link["/animated-link"]
                src/components/animated//link/use//animated//router.ts["use-animated-router.ts"]
                src/components/animated//link/view//transition//provider.tsx["view-transition-provider.tsx"]
                src/components/animated//link/index.tsx["index.tsx"]
            end
            subgraph src/components/icons["/icons"]
                src/components/icons/github//icon.tsx["github-icon.tsx"]
                src/components/icons/x//icon.tsx["x-icon.tsx"]
            end
            subgraph src/components/ui["/ui"]
                src/components/ui/button.tsx["button.tsx"]
                src/components/ui/popover.tsx["popover.tsx"]
                src/components/ui/select.tsx["select.tsx"]
                src/components/ui/slider.tsx["slider.tsx"]
                src/components/ui/toggle.tsx["toggle.tsx"]
                src/components/ui/collapsible.tsx["collapsible.tsx"]
                src/components/ui/scroll//area.tsx["scroll-area.tsx"]
            end
            subgraph src/components/head//title["/head-title"]
                src/components/head//title/provider.tsx["provider.tsx"]
                src/components/head//title/index.tsx["index.tsx"]
            end
            subgraph src/components/wheel//picker["/wheel-picker"]
                src/components/wheel//picker/index.tsx["index.tsx"]
            end
        end
        subgraph src/app["/app"]
            src/app/fonts.ts["fonts.ts"]
            src/app/metadata.ts["metadata.ts"]
            src/app/manifest.ts["manifest.ts"]
            src/app/footer.tsx["footer.tsx"]
            src/app/head//title//controller.tsx["head-title-controller.tsx"]
            src/app/layout.tsx["layout.tsx"]
            src/app/share//timer.tsx["share-timer.tsx"]
            src/app/page.tsx["page.tsx"]
            subgraph src/app/api/////...route////["/api/[[...route]]"]
                src/app/api/////...route/////route.ts["route.ts"]
            end
            subgraph src/app/timers///id//["/timers/[id]"]
                src/app/timers///id///use//shared//timer.ts["use-shared-timer.ts"]
                src/app/timers///id///shared//timer.tsx["shared-timer.tsx"]
                src/app/timers///id///page.tsx["page.tsx"]
                subgraph src/app/timers///id///events["/events"]
                    src/app/timers///id///events/route.ts["route.ts"]
                end
            end
        end
        subgraph src/lib["/lib"]
            src/lib/utils.ts["utils.ts"]
            src/lib/url.ts["url.ts"]
            src/lib/url.test.ts["url.test.ts"]
        end
        subgraph src/schema["/schema"]
            src/schema/timer//event.ts["timer-event.ts"]
        end
        subgraph src/server["/server"]
            src/server/index.ts["index.ts"]
            src/server/client.ts["client.ts"]
            subgraph src/server/shared//times["/shared-times"]
                src/server/shared//times/sse.ts["sse.ts"]
                src/server/shared//times/index.ts["index.ts"]
            end
        end
    end
    next.config.ts-->node//modules/next/index.d.ts
    tailwind.config.ts-->node//modules/tailwindcss/types/index.d.ts
    tailwind.config.ts-->node//modules/tailwindcss//animate/index.d.ts
    src/app/fonts.ts-->src/components/timer/settings.ts
    src/app/fonts.ts-->node//modules/next/dist/compiled///next/font/dist/types.d.ts
    src/app/fonts.ts-->node//modules/next/font/google/index.d.ts
    src/app/metadata.ts-->node//modules/next/index.d.ts
    src/app/manifest.ts-->node//modules/next/index.d.ts
    src/app/manifest.ts-->src/app/metadata.ts
    src/lib/utils.ts-->node//modules/clsx/clsx.d.mts
    src/lib/utils.ts-->node//modules/tailwind//merge/dist/types.d.ts
    src/components/timer/timer.ts-->src/lib/utils.ts
    src/components/timer/timer.ts-->node//modules/zod/index.d.ts
    src/schema/timer//event.ts-->src/components/timer/timer.ts
    src/schema/timer//event.ts-->node//modules/zod/index.d.ts
    src/server/shared//times/index.ts-->src/components/timer/timer.ts
    src/server/shared//times/index.ts-->src/schema/timer//event.ts
    src/server/shared//times/index.ts-->src/server/shared//times/sse.ts
    src/lib/url.ts-->src/server/shared//times/index.ts
    src/server/index.ts-->node//modules///hono/zod//validator/dist/esm/index.d.ts
    src/server/index.ts-->node//modules/hono/dist/types/index.d.ts
    src/server/index.ts-->src/components/timer/timer.ts
    src/server/index.ts-->src/lib/url.ts
    src/server/index.ts-->src/server/shared//times/index.ts
    src/app/api/////...route/////route.ts-->src/server/index.ts
    src/app/api/////...route/////route.ts-->node//modules/hono/dist/types/index.d.ts
    src/app/api/////...route/////route.ts-->node//modules/hono/dist/types/adapter/vercel/index.d.ts
    src/components/timer/local//storage.ts-->src/components/timer/settings.ts
    src/components/timer/local//storage.ts-->src/components/timer/timer.ts
    src/components/timer/timer//provider.tsx-->node//modules///types/react/index.d.ts
    src/components/timer/timer//provider.tsx-->src/components/timer/local//storage.ts
    src/components/timer/timer//provider.tsx-->src/components/timer/settings.ts
    src/components/timer/timer//provider.tsx-->src/components/timer/timer.ts
    src/components/timer/use//timer.ts-->src/lib/url.ts
    src/components/timer/use//timer.ts-->node//modules///types/react/index.d.ts
    src/components/timer/use//timer.ts-->src/components/timer/local//storage.ts
    src/components/timer/use//timer.ts-->src/components/timer/settings.ts
    src/components/timer/use//timer.ts-->src/components/timer/timer.ts
    src/components/timer/use//timer.ts-->src/components/timer/timer//provider.tsx
    src/app/timers///id///use//shared//timer.ts-->src/components/timer/use//timer.ts
    src/app/timers///id///use//shared//timer.ts-->src/schema/timer//event.ts
    src/app/timers///id///use//shared//timer.ts-->node//modules///types/react/index.d.ts
    src/app/timers///id///events/route.ts-->src/server/shared//times/index.ts
    src/app/timers///id///events/route.ts-->node//modules/next/headers.d.ts
    src/components/animated//link/use//animated//router.ts-->node//modules/next//view//transitions/dist/index.d.ts
    src/components/timer/timer.test.ts-->src/components/timer/timer.ts
    src/lib/url.test.ts-->src/lib/url.ts
    src/server/client.ts-->node//modules/hono/dist/types/client/index.d.ts
    src/server/client.ts-->src/server/index.ts
    src/components/icons/github//icon.tsx-->src/lib/utils.ts
    src/components/icons/x//icon.tsx-->src/lib/utils.ts
    src/components/ui/button.tsx-->node//modules///radix//ui/react//slot/dist/index.d.mts
    src/components/ui/button.tsx-->node//modules/class_//variance//authority/dist/index.d.ts
    src/components/ui/button.tsx-->node//modules///types/react/index.d.ts
    src/components/ui/button.tsx-->src/lib/utils.ts
    src/app/footer.tsx-->node//modules/next/link.d.ts
    src/app/footer.tsx-->src/components/icons/github//icon.tsx
    src/app/footer.tsx-->src/components/icons/x//icon.tsx
    src/app/footer.tsx-->src/components/ui/button.tsx
    src/app/footer.tsx-->src/app/metadata.ts
    src/components/head//title/provider.tsx-->node//modules///types/react/index.d.ts
    src/components/head//title/index.tsx-->node//modules///types/react/index.d.ts
    src/components/head//title/index.tsx-->src/components/head//title/provider.tsx
    src/app/head//title//controller.tsx-->src/components/head//title/index.tsx
    src/app/head//title//controller.tsx-->src/components/timer/use//timer.ts
    src/app/head//title//controller.tsx-->node//modules///types/react/index.d.ts
    src/components/animated//link/view//transition//provider.tsx-->node//modules/next//view//transitions/dist/index.d.ts
    src/app/layout.tsx-->node//modules/next/font/google/index.d.ts
    src/app/layout.tsx-->src/components/animated//link/view//transition//provider.tsx
    src/app/layout.tsx-->src/components/head//title/index.tsx
    src/app/layout.tsx-->src/lib/utils.ts
    src/app/layout.tsx-->src/app/footer.tsx
    src/app/layout.tsx-->src/app/metadata.ts
    src/components/wheel//picker/index.tsx-->src/lib/utils.ts
    src/components/wheel//picker/index.tsx-->node//modules///types/react/index.d.ts
    src/components/timer/number//wheel.tsx-->node//modules///types/react/index.d.ts
    src/components/timer/number//wheel.tsx-->src/lib/utils.ts
    src/components/timer/timer//controller.tsx-->src/lib/utils.ts
    src/components/timer/timer//controller.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
    src/components/timer/timer//controller.tsx-->src/components/ui/button.tsx
    src/components/timer/timer//controller.tsx-->src/components/timer/use//timer.ts
    src/components/timer/index.tsx-->src/app/fonts.ts
    src/components/timer/index.tsx-->src/lib/utils.ts
    src/components/timer/index.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
    src/components/timer/index.tsx-->src/components/ui/button.tsx
    src/components/timer/index.tsx-->src/components/wheel//picker/index.tsx
    src/components/timer/index.tsx-->src/components/timer/number//wheel.tsx
    src/components/timer/index.tsx-->src/components/timer/timer//controller.tsx
    src/components/timer/index.tsx-->src/components/timer/use//timer.ts
    src/components/ui/popover.tsx-->node//modules///radix//ui/react//popover/dist/index.d.mts
    src/components/ui/popover.tsx-->node//modules///types/react/index.d.ts
    src/components/ui/popover.tsx-->src/lib/utils.ts
    src/components/ui/select.tsx-->src/lib/utils.ts
    src/components/ui/select.tsx-->node//modules///radix//ui/react//icons/dist/index.d.ts
    src/components/ui/select.tsx-->node//modules///radix//ui/react//select/dist/index.d.mts
    src/components/ui/select.tsx-->node//modules///types/react/index.d.ts
    src/components/timer/timer//controller//settings/finish//sound//selector.tsx-->src/components/ui/button.tsx
    src/components/timer/timer//controller//settings/finish//sound//selector.tsx-->src/components/ui/select.tsx
    src/components/timer/timer//controller//settings/finish//sound//selector.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
    src/components/timer/timer//controller//settings/finish//sound//selector.tsx-->src/components/timer/settings.ts
    src/components/timer/timer//controller//settings/finish//sound//selector.tsx-->src/components/timer/use//timer.ts
    src/components/ui/slider.tsx-->node//modules///radix//ui/react//slider/dist/index.d.mts
    src/components/ui/slider.tsx-->node//modules///types/react/index.d.ts
    src/components/ui/slider.tsx-->src/lib/utils.ts
    src/components/timer/timer//controller//settings/finish//sound//volume//slider.tsx-->src/components/ui/slider.tsx
    src/components/timer/timer//controller//settings/finish//sound//volume//slider.tsx-->src/components/timer/use//timer.ts
    src/components/timer/timer//controller//settings/font//selector.tsx-->src/app/fonts.ts
    src/components/timer/timer//controller//settings/font//selector.tsx-->src/components/ui/select.tsx
    src/components/timer/timer//controller//settings/font//selector.tsx-->src/lib/utils.ts
    src/components/timer/timer//controller//settings/font//selector.tsx-->src/components/timer/settings.ts
    src/components/timer/timer//controller//settings/font//selector.tsx-->src/components/timer/use//timer.ts
    src/components/ui/toggle.tsx-->node//modules///radix//ui/react//toggle/dist/index.d.mts
    src/components/ui/toggle.tsx-->node//modules/class_//variance//authority/dist/index.d.ts
    src/components/ui/toggle.tsx-->node//modules///types/react/index.d.ts
    src/components/ui/toggle.tsx-->src/lib/utils.ts
    src/components/timer/timer//controller//settings/horizontal//layout//toggle.tsx-->src/components/ui/toggle.tsx
    src/components/timer/timer//controller//settings/horizontal//layout//toggle.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
    src/components/timer/timer//controller//settings/horizontal//layout//toggle.tsx-->src/components/timer/use//timer.ts
    src/components/timer/timer//controller//settings/index.tsx-->src/app/fonts.ts
    src/components/timer/timer//controller//settings/index.tsx-->src/components/ui/button.tsx
    src/components/timer/timer//controller//settings/index.tsx-->src/components/ui/popover.tsx
    src/components/timer/timer//controller//settings/index.tsx-->src/lib/utils.ts
    src/components/timer/timer//controller//settings/index.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
    src/components/timer/timer//controller//settings/index.tsx-->node//modules///types/react/index.d.ts
    src/components/timer/timer//controller//settings/index.tsx-->src/components/timer/use//timer.ts
    src/components/timer/timer//controller//settings/index.tsx-->src/components/timer/timer//controller//settings/finish//sound//selector.tsx
    src/components/timer/timer//controller//settings/index.tsx-->src/components/timer/timer//controller//settings/finish//sound//volume//slider.tsx
    src/components/timer/timer//controller//settings/index.tsx-->src/components/timer/timer//controller//settings/font//selector.tsx
    src/components/timer/timer//controller//settings/index.tsx-->src/components/timer/timer//controller//settings/horizontal//layout//toggle.tsx
    src/components/timer/timer//header.tsx-->src/lib/utils.ts
    src/components/timer/timer//header.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
    src/components/timer/timer//header.tsx-->node//modules/next/link.d.ts
    src/components/timer/timer//header.tsx-->node//modules///types/react/index.d.ts
    src/components/timer/timer//header.tsx-->src/components/ui/button.tsx
    src/components/timer/timer//header.tsx-->src/components/timer/timer//controller//settings/index.tsx
    src/components/timer/timer//header.tsx-->src/components/timer/use//timer.ts
    src/app/share//timer.tsx-->src/components/timer/use//timer.ts
    src/app/share//timer.tsx-->src/components/ui/button.tsx
    src/app/share//timer.tsx-->src/server/client.ts
    src/app/share//timer.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
    src/app/share//timer.tsx-->node//modules/next/navigation.d.ts
    src/app/page.tsx-->src/components/timer/index.tsx
    src/app/page.tsx-->src/components/timer/timer//header.tsx
    src/app/page.tsx-->src/components/timer/timer//provider.tsx
    src/app/page.tsx-->src/app/head//title//controller.tsx
    src/app/page.tsx-->src/app/share//timer.tsx
    src/app/timers///id///shared//timer.tsx-->src/components/timer/index.tsx
    src/app/timers///id///shared//timer.tsx-->src/app/timers///id///use//shared//timer.ts
    src/app/timers///id///page.tsx-->src/app/head//title//controller.tsx
    src/app/timers///id///page.tsx-->src/components/timer/timer//header.tsx
    src/app/timers///id///page.tsx-->src/components/timer/timer//provider.tsx
    src/app/timers///id///page.tsx-->src/app/timers///id///shared//timer.tsx
    src/components/animated//link/index.tsx-->node//modules/next//view//transitions/dist/index.d.ts
    src/components/ui/collapsible.tsx-->node//modules///radix//ui/react//collapsible/dist/index.d.mts
    src/components/ui/scroll//area.tsx-->node//modules///radix//ui/react//scroll//area/dist/index.d.mts
    src/components/ui/scroll//area.tsx-->node//modules///types/react/index.d.ts
    src/components/ui/scroll//area.tsx-->src/lib/utils.ts
```
