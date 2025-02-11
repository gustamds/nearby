import { View, Text } from "react-native";
import { IconPhone, IconMapPin, IconTicket } from "@tabler/icons-react-native";

import { s } from "./styles";
import { Info } from "../info";

export type PropsDetails = {
    name: string;
    description: string;
    address: string;
    phone: string;
    coupons: number;
    rules:{
        id: string;
        description: string;
    }[]
}

type Props = {
    data: PropsDetails;
}

export function Details({ data }: Props){
    return(
        <View style={s.container}>
            <Text style={s.name}>{data.name}</Text>
            <Text style={s.description}>{data.description}</Text>

            <View style={s.group}>
                <Text style={s.title}>Informacoes</Text>

                <Info description={`${data.coupons} coupons disponiveis`}  icon={IconTicket} />
                <Info description={data.address} icon={IconMapPin}  />
                <Info description={data.phone} icon={IconPhone}  />
            </View>

            <View style={s.group}>
                <Text style={s.title}>Regulamento</Text>
                {data.rules.map((item) => (
                    <Text key={item.id} style={[s.rule, { marginBottom: 4 }]}>
                        {`\u2022 ${item.description}`}
                    </Text>
                ))}
            </View>
        </View>
    )
}
