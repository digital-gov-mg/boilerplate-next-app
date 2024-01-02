import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { styled } from '@/core';
import { mauve, violet } from '@radix-ui/colors'

export const ToggleGroupRoot = styled(ToggleGroup.Root, {
    display: 'flex',
})

export const ToggleGroupItem = styled(ToggleGroup.Item, {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px',
    backgroundColor: mauve.mauve3,
    color: mauve.mauve11,
    '& svg': {
      marginRight: '4px',
    },
    '&:first-child': { marginLeft: 0, borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
    '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
    '&:hover': { backgroundColor: violet.violet3 },
    '&[data-state=on]': { backgroundColor: violet.violet5, color: violet.violet11 },
})