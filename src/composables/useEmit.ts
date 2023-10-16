import {type UnwrapRef} from 'vue'

export function useEmit() {

    const emitCustom = (eventName: string, component: UnwrapRef<any>, detail: any) => {
        component.value.dispatchEvent(
            new CustomEvent(eventName, {
                bubbles: true,
                detail: detail,
                composed: true,
            }),
        );
    }

    return {emitCustom}
}