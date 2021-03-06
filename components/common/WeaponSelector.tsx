import { Select } from "@chakra-ui/react";
import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { weaponsWithHeroCategorized } from "lib/lists/weaponsWithHero";

interface Props {
  name?: string;
  value: string;
  onChange: (value: string) => void;
  excludeAlt?: boolean;
  isHeader?: boolean;
}

const WeaponSelector: React.FC<Props> = ({
  name,
  value,
  onChange,
  excludeAlt = false,
  isHeader = false,
}) => {
  const { i18n } = useLingui();
  return (
    <>
      <Select
        value={value ?? "NO_VALUE"}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        mx={isHeader ? "auto" : undefined}
        maxWidth={80}
        size={isHeader ? "lg" : undefined}
      >
        <option hidden value="NO_VALUE">
          {t`Select weapon`}
        </option>
        {weaponsWithHeroCategorized.flatMap((wpnCategory) =>
          wpnCategory.weapons.map((wpn) => {
            if (
              excludeAlt &&
              (wpn.includes("Hero") || wpn.includes("Octo Shot"))
            )
              return null;
            return (
              <option key={wpn} value={wpn}>
                {i18n._(wpn)}
              </option>
            );
          })
        )}
      </Select>
    </>
  );
};

export default WeaponSelector;
