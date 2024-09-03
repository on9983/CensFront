// COMPONENT
import { REGISTERED } from "@/lib/session-status";
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Navigation } from "@/ui/components/navigation/navigation";
import { TableauDeLiens } from "@/ui/components/navigation/tableauDeLiens";
import { Seo } from "@/ui/components/seo/seo";

//DESIGN SYSTEM
import { Button } from "@/ui/design-system/button/button";
import { Cadran } from "@/ui/design-system/cadran/cadran";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

//ICO
import { RiUser6Fill } from "react-icons/ri";

export default function DesignSystem() {
    return (
        <Layout
            titre="Design System"
            desc="Page de publication du design-system"
            className="space-y-4"
            sessionStatus={REGISTERED}
        >
            <div className="space-y-10">
                <Typography
                    theme="primary"
                    variant="h1"
                    className="text-center"
                >
                    Design-system
                </Typography>

                {/* Typographies */}
                <div className="space-y-4 px-10">
                    <Typography theme="primary" variant="h3">
                        Typography
                    </Typography>

                    <div className="flex flex-col gap-2 pl-10 pt-4 space-y-4">
                        <div className="pb-5 space-y-2">
                            <Typography theme="primary" variant="CapSm">
                                Display
                            </Typography>
                            <Typography variant="display">
                                Design-System is online
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2">
                            <Typography theme="primary" variant="CapSm">
                                h1
                            </Typography>
                            <Typography variant="h1">
                                Design-System is online, you can test it.
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2">
                            <Typography theme="primary" variant="CapSm">
                                h2
                            </Typography>
                            <Typography variant="h2">
                                Design-System is online, you can test it, for
                                personnal use.
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2">
                            <Typography theme="primary" variant="CapSm">
                                h3
                            </Typography>
                            <Typography variant="h3" theme="gray">
                                Design-System is online, you can test it, for
                                personnal use.
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2">
                            <div className="flex flex-row gap-32">
                                <div className="space-y-2">
                                    <Typography theme="primary" variant="CapSm">
                                        Caption Large
                                    </Typography>
                                    <Typography variant="CapLg">
                                        Design-System
                                    </Typography>
                                </div>
                                <div className="space-y-2">
                                    <Typography theme="primary" variant="CapSm">
                                        Caption Medium
                                    </Typography>
                                    <Typography variant="CapMd">
                                        Design-System
                                    </Typography>
                                </div>
                                <div className="space-y-2">
                                    <Typography theme="primary" variant="CapSm">
                                        Caption Small
                                    </Typography>
                                    <Typography variant="CapSm" theme="gray">
                                        Design-System
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="pb-5 space-y-2">
                            <Typography theme="primary" variant="CapSm">
                                Texte
                            </Typography>
                            <Typography variant="Texte" theme="gray">
                                Un exemple de texte, ou de paragraphe, possédant
                                plusieurs lignes d’écriture.
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2">
                            <Typography theme="primary" variant="CapSm">
                                Small
                            </Typography>
                            <Typography variant="Small" theme="gray">
                                Everyone has the right to freedom of thought,
                                conscience and religion; this right includes
                                freedom to change his religion or belief, and
                                freedom, either alone or in community with
                                others and in public or private, to manifest his
                                religion or belief in teaching, practice,
                                worship and observance. Everyone has the right
                                to freedom of opinion and expression; this right
                                includes freedom to hold opinions without
                                interference and to seek, receive and impart
                                information and ideas through any media and
                                regardless of frontiers. Everyone has the right
                                to rest and leisure, including reasonable
                                limitation of working hours and periodic
                                holidays with pay.
                            </Typography>
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-40 px-10">
                    {/* Spinners */}
                    <div className="space-y-2">
                        <Typography theme="primary" variant="h3">
                            Spinners
                        </Typography>

                        <div className="flex items-center gap-20 p-4">
                            <div className="flex items-center gap-2">
                                <Spinner size="small" />
                                <Spinner />
                                <Spinner size="large" />
                            </div>
                            <div>
                                <Spinner size="page" />
                            </div>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="space-y-2">
                        <Typography theme="primary" variant="h3">
                            Logo
                        </Typography>

                        <div className="flex items-center gap-8 p-4">
                            <Logo size="very-small" />
                            <Logo size="small" />
                            <Logo />
                            <Logo size="large" />
                        </div>
                    </div>
                </div>

                {/* Cadran */}
                <div className="space-y-4 px-10">
                    <div className="space-y-2">
                        <Typography theme="primary" variant="h3">
                            Cadran
                        </Typography>

                        <div className="flex items-center gap-8 p-4">
                            <Cadran
                                src="/images/cadran.png"
                                alt="L'Institution Marmoutier de Sainte-Radegonde, à Tours."
                                size="Small1"
                            />
                            <Cadran
                                src="/images/cadran.png"
                                alt="L'Institution Marmoutier de Sainte-Radegonde, à Tours."
                                size="Small2"
                            />
                            <Cadran
                                src="/images/cadran.png"
                                alt="L'Institution Marmoutier de Sainte-Radegonde, à Tours."
                                size="Medium1"
                            />
                            <Cadran
                                src="/images/cadran.png"
                                alt="L'Institution Marmoutier de Sainte-Radegonde, à Tours."
                            />
                            <Cadran
                                src="/images/cadran.png"
                                alt="L'Institution Marmoutier de Sainte-Radegonde, à Tours."
                                size="Large1"
                            />
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="space-y-4 px-10">
                    <Typography theme="primary" variant="h3">
                        Buttons
                    </Typography>
                    <div className="p-4 space-y-4">
                        <div className="space-y-2">
                            <Typography theme="primary" variant="CapSm">
                                Small
                            </Typography>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Button size="small">Accent</Button>
                                    <Button size="small" variant="secondary">
                                        Accent
                                    </Button>

                                    <Button size="small" icon="test" />

                                    <Button
                                        size="small"
                                        icon="test"
                                        variant="secondary"
                                    />

                                    <Button
                                        size="small"
                                        icon={{ icon: RiUser6Fill }}
                                    >
                                        Test
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="secondary"
                                        icon={{ icon: RiUser6Fill }}
                                        iconPosition="left"
                                    >
                                        Test
                                    </Button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button size="small" disabled>
                                        Accent
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="secondary"
                                        disabled
                                    >
                                        Accent
                                    </Button>
                                    <Button size="small" icon="test" disabled />
                                    <Button
                                        size="small"
                                        icon="test"
                                        variant="secondary"
                                        disabled
                                    />
                                    <Button
                                        size="small"
                                        icon={{ icon: RiUser6Fill }}
                                        disabled
                                    >
                                        Test
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="secondary"
                                        icon={{ icon: RiUser6Fill }}
                                        iconPosition="left"
                                        disabled
                                    >
                                        Test
                                    </Button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button isLoading size="small">
                                        Accent
                                    </Button>
                                    <Button isLoading size="small" disabled>
                                        Accent
                                    </Button>
                                    <Button
                                        isLoading
                                        size="small"
                                        variant="secondary"
                                    >
                                        Accent
                                    </Button>
                                    <Button
                                        isLoading
                                        size="small"
                                        variant="secondary"
                                        disabled
                                    >
                                        Accent
                                    </Button>

                                    <Button
                                        isLoading
                                        size="small"
                                        icon="test"
                                    />
                                    <Button
                                        isLoading
                                        size="small"
                                        icon="test"
                                        disabled
                                    />
                                    <Button
                                        isLoading
                                        size="small"
                                        icon="test"
                                        variant="secondary"
                                    />
                                    <Button
                                        isLoading
                                        size="small"
                                        icon="test"
                                        variant="secondary"
                                        disabled
                                    />

                                    <Button
                                        isLoading
                                        size="small"
                                        icon={{ icon: RiUser6Fill }}
                                    >
                                        Test
                                    </Button>
                                    <Button
                                        isLoading
                                        variant="secondary"
                                        size="small"
                                        icon={{ icon: RiUser6Fill }}
                                        iconPosition="left"
                                    >
                                        Test
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Typography theme="primary" variant="CapSm">
                                Medium
                            </Typography>
                            <div>
                                <div className="flex items-center gap-2 ">
                                    <Button>Accent</Button>
                                    <Button disabled>Accent</Button>
                                    <Button variant="secondary">Accent</Button>
                                    <Button variant="secondary" disabled>
                                        Accent
                                    </Button>

                                    <Button icon="test" />
                                    <Button icon="test" disabled />
                                    <Button icon="test" variant="secondary" />
                                    <Button
                                        icon="test"
                                        variant="secondary"
                                        disabled
                                    />

                                    <Button icon={{ icon: RiUser6Fill }}>
                                        Test
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        icon={{ icon: RiUser6Fill }}
                                        iconPosition="left"
                                    >
                                        Test
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Typography theme="primary" variant="CapSm">
                                Large
                            </Typography>
                            <div>
                                <div className="flex items-center gap-2 ">
                                    <Button size="large">Accent</Button>
                                    <Button size="large" disabled>
                                        Accent
                                    </Button>
                                    <Button size="large" variant="secondary">
                                        Accent
                                    </Button>
                                    <Button
                                        size="large"
                                        variant="secondary"
                                        disabled
                                    >
                                        Accent
                                    </Button>

                                    <Button size="large" icon="test" />
                                    <Button size="large" icon="test" disabled />
                                    <Button
                                        size="large"
                                        icon="test"
                                        variant="secondary"
                                    />
                                    <Button
                                        size="large"
                                        icon="test"
                                        variant="secondary"
                                        disabled
                                    />

                                    <Button
                                        size="large"
                                        icon={{ icon: RiUser6Fill }}
                                    >
                                        Test
                                    </Button>
                                    <Button
                                        size="large"
                                        variant="secondary"
                                        icon={{ icon: RiUser6Fill }}
                                        iconPosition="left"
                                    >
                                        Test
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tableau de liens */}
                <div className="space-y-4 px-10">
                    <Typography theme="primary" variant="h3">
                        Tableau de liens
                    </Typography>
                    <Container>
                        <TableauDeLiens />
                    </Container>
                </div>
            </div>
        </Layout>
    );
}
